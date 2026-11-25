import React from 'react'
import { ClassManagementCard } from './ClassManagementCard'
import { FeatureCard } from './FeatureCard'
import { TILES } from './data'

type ClassroomSectionProps = {
  liveClasses: number
  unreadMessages: number
}

/** "Your classroom" — scrolls on its own, independent of the upcoming list. */
export const ClassroomSection: React.FC<ClassroomSectionProps> = ({ liveClasses, unreadMessages }) => (
  <section className="max-h-[50vh] flex-1 overflow-y-auto px-5 pb-8 pt-7 lg:max-h-none lg:px-8">
    <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Your classroom</h1>
    <p className="mt-1.5 text-[13px] text-muted lg:text-sm">
      {liveClasses} live class today. {unreadMessages} unread messages from students.
    </p>

    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ClassManagementCard />
      {TILES.map((tile) => (
        <FeatureCard key={tile.title} tile={tile} />
      ))}
    </div>
  </section>
)
