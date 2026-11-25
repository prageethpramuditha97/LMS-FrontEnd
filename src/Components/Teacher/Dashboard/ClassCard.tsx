import React from 'react'
import { Video, Copy, Users } from 'lucide-react'
import type { UpcomingClass } from './data'

type ClassCardProps = {
  item: UpcomingClass
  live?: boolean
  liveStatus?: string
  onStart?: () => void
}

export const ClassCard: React.FC<ClassCardProps> = ({ item, live = false, liveStatus, onStart }) => (
  <article className={`rounded-2xl border p-4 ${live ? 'border-brand/30 bg-brand-soft' : 'border-line bg-white'}`}>
    <div className="flex gap-4">
      <div
        className={`flex h-[72px] w-[56px] shrink-0 flex-col items-center justify-center rounded-xl ${
          live ? 'bg-brand text-white' : 'bg-page text-ink'
        }`}
      >
        <span className="text-[11px] font-bold uppercase">{item.month}</span>
        <span className="text-2xl font-bold leading-none">{item.day}</span>
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="rounded-md border border-brand/50 bg-white px-2 py-0.5 text-xs font-semibold text-brand">
            {item.grade}
          </span>
          <span className="text-xs text-muted">{item.type}</span>
        </div>
        <h3 className="mt-1.5 text-[15px] font-bold">{item.subject}</h3>
        <p className="mt-0.5 text-sm text-muted">{item.when}</p>
      </div>
    </div>

    <div className={`mt-4 grid grid-cols-2 gap-4 border-t pt-3 text-xs ${live ? 'border-brand/15' : 'border-line'}`}>
      <div>
        <p className="text-muted">Meeting ID</p>
        <p className="mt-1 flex items-center gap-1.5 font-medium">
          {item.meetingId}
          <button aria-label="Copy meeting ID" className="text-muted hover:text-brand">
            <Copy size={12} />
          </button>
        </p>
      </div>
      <div>
        <p className="text-muted">Enrolled</p>
        <p className="mt-1 flex items-center gap-1.5 font-medium">
          <Users size={13} className="text-muted" />
          {item.enrolled} students
        </p>
      </div>
    </div>

    {live && (
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs font-medium text-brand">{liveStatus}</span>
        <button
          onClick={onStart}
          className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#3e4de6]"
        >
          <Video size={16} />
          Start now
        </button>
      </div>
    )}
  </article>
)
