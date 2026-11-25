function UpcomingCard({
  session,
  next,
  onStart,
}: {
  session: Session
  next: boolean
  onStart: () => void
}) {
  const dayLabel = isToday(session.start)
    ? 'Today'
    : isTomorrow(session.start)
      ? 'Tomorrow'
      : format(session.start, 'EEEE')

  const live = session.start.getTime() <= Date.now()

  return (
    <article
      className={`
        rounded-2xl border p-4
        ${
          next
            ? 'border-brand/30 bg-brand-soft'
            : 'border-line bg-surface'
        }
      `}
    >

      {/* Class details */}
      <div className="flex gap-4">

        {/* Date */}
        <div
          className={`
            flex w-14 shrink-0 flex-col items-center
            justify-center rounded-xl py-2
            ${
              next
                ? 'bg-brand text-white'
                : 'bg-canvas text-ink'
            }
          `}
        >
          <span className="text-[11px] font-semibold uppercase">
            {format(session.start, 'MMM')}
          </span>

          <span className="text-xl font-bold leading-none">
            {format(session.start, 'd')}
          </span>
        </div>

        {/* Session information */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center gap-1.5">

            <span className="rounded-md bg-surface px-2 py-0.5 text-xs font-semibold text-brand ring-1 ring-brand/20">
              Grade {session.grade}
            </span>

            <span className="text-xs text-muted">
              {session.category}
            </span>
          </div>

          <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">
            {session.topic}
          </h3>

          <p className="mt-1 text-sm text-muted">
            {dayLabel} · {format(session.start, 'h:mm a')} –{' '}
            {format(session.end, 'h:mm a')}
          </p>
        </div>
      </div>

      {/* Meeting details */}
      <dl className="mt-3 grid grid-cols-2 gap-2 border-t border-ink/5 pt-3 text-xs">

        <div>
          <dt className="text-faint">
            Meeting ID
          </dt>

          <dd className="mt-0.5 flex items-center gap-1 font-medium tabular-nums text-ink">
            {session.meetingId}

            <Copy className="size-3 text-faint" />
          </dd>
        </div>

        <div>
          <dt className="text-faint">
            Enrolled
          </dt>

          <dd className="mt-0.5 flex items-center gap-1 font-medium text-ink">
            <Users className="size-3 text-faint" />

            {session.enrolled} students
          </dd>
        </div>
      </dl>

      {/* Start class button */}
      {next && (
        <div className="mt-3 flex items-center justify-between gap-3">

          <span className="text-xs font-medium text-brand">
            {live
              ? 'In progress'
              : `Starts in ${formatDistanceToNowStrict(session.start)}`}
          </span>

          <button
            onClick={onStart}
            className="
              flex items-center gap-1.5 rounded-xl
              bg-brand px-3.5 py-2 text-sm font-semibold
              text-white transition-colors duration-150
              hover:bg-brand-strong
            "
          >
            <Video className="size-4" />

            Start now
          </button>
        </div>
      )}
    </article>
  )
}

/* =========================================================
   DASHBOARD CARD DATA
========================================================= */

const TILES: {
  key: TeacherPage
  title: string
  blurb: string
  image: string
}[] = [
  {
    key: 'students',
    title: 'Student Management',
    blurb: 'Rosters, guardians and attendance.',
    image: IMAGES.students,
  },
  {
    key: 'payments',
    title: 'Payments',
    blurb: 'Monthly fees: who has paid and who has not.',
    image: IMAGES.payments,
  },
  {
    key: 'sms',
    title: 'Send SMS',
    blurb: 'Reminders to a grade or everyone.',
    image: IMAGES.sms,
  },
  {
    key: 'messages',
    title: 'Messages from Students',
    blurb: 'Questions and replies in one inbox.',
    image: IMAGES.messages,
  },
]


How to use it
Since your header is already separate, render the dashboard directly below it:
import TeacherDashboard from './TeacherDashboard'

export default function TeacherPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />

      <div className="flex-1 min-h-0">
        <TeacherDashboard
          upcomingCount={6}
          unreadMessages={2}
          onOpen={(page) => {
            console.log('Navigate to:', page)
          }}
          onStartClass={(session) => {
            console.log('Starting class:', session)
          }}
        />
      </div>
    </div>
  )
}