import React from 'react'
import { ClassCard } from './ClassCard'
import { CLASSES } from './data'

type UpcomingClassesProps = {
  liveStatus: string
  onStart?: () => void
  onViewCalendar?: () => void
}

/** Bottom panel on phones, right column on desktop — its list scrolls on its own. */
export const UpcomingClasses: React.FC<UpcomingClassesProps> = ({ liveStatus, onStart, onViewCalendar }) => (
  <aside className="flex h-[46%] shrink-0 flex-col border-t border-line bg-white lg:h-auto lg:w-[400px] lg:border-l lg:border-t-0">
    <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-5">
      <h2 className="text-lg font-bold">Upcoming classes</h2>
      <button onClick={onViewCalendar} className="text-sm font-medium text-brand hover:underline">
        View calendar
      </button>
    </div>

    <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 pb-6">
      {CLASSES.map((c, i) => (
        <ClassCard key={c.meetingId} item={c} live={i === 0} liveStatus={liveStatus} onStart={onStart} />
      ))}
    </div>
  </aside>
)
