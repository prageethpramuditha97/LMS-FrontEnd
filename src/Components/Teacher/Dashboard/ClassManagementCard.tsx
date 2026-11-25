import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { IMG } from './data'

/** The featured, double-width tile at the top of the classroom grid. */
export const ClassManagementCard: React.FC = () => (
  <a
    href="#"
    className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-150 hover:border-brand/40 sm:flex-row md:col-span-2"
  >
    <div className="flex items-center justify-center bg-sky sm:w-[45%]">
      <img src={IMG.calendar} alt="" className="h-52 w-full object-contain sm:h-full sm:max-h-80" />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h2 className="text-xl font-bold">Class Management</h2>
      <p className="mt-2 text-sm text-muted">Every grade's calendar, sessions by month, and one-click Zoom start.</p>
      <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-brand">
        Open calendar <ArrowUpRight size={15} />
      </span>
    </div>
  </a>
)
