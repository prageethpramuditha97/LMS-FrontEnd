// src/Errors/NotAuthorized.tsx
import { ClassroomSection } from './Dashboard/ClassroomSection';
import { UpcomingClasses } from './Dashboard/UpcomingClasses';
import TopBar from './TopBar/TopBar';

import './TopBar/topBar.css'

type Props = Partial<typeof args> & { onStart?: () => void; onViewCalendar?: () => void }

const TeacherMain: React.FC<Props> = (props) => {
  const { teacherName, role, date, shortDate, time, liveClasses, unreadMessages, liveStatus } = { ...args, ...props }
  return (
    <div className="flex min-h-screen bg-gray-200 flex-col overflow-hidden bg-page font-sans text-ink">
      <TopBar
          name="Dilani Fernando"
          role="Science Teacher"
          liveClock={true}
          onProfile={() => console.log('Profile clicked')}
          onLogout={() => console.log('Logout clicked')}
        />

      {/* Two independently scrolling regions: stacked on phones, side by side on desktop */}
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <ClassroomSection liveClasses={liveClasses} unreadMessages={unreadMessages} />
        <UpcomingClasses liveStatus={liveStatus} onStart={props.onStart} onViewCalendar={props.onViewCalendar} />
      </div>
    </div>
  );
}

export default TeacherMain;


export const args = {
  teacherName: 'Dilani Fernando',
  role: 'Science Teacher',
  date: 'Wednesday, 25 November 2026',
  shortDate: 'Wed, 25 Nov 2026',
  time: '06:17 PM',
  liveClasses: 1,
  unreadMessages: 2,
  liveStatus: 'In progress',
}

export const argTypes = {
  teacherName: { control: 'text' },
  liveStatus: { control: 'select', options: ['In progress', 'Starts soon', 'Scheduled'] },
  unreadMessages: { control: 'number' },
}
