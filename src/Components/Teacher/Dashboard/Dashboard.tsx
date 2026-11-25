// src/Errors/NotAuthorized.tsx
import { Link } from 'react-router-dom';
import { ClassroomSection } from './ClassroomSection';
import { UpcomingClasses } from './UpcomingClasses';
type Props = Partial<typeof args> & { onStart?: () => void; onViewCalendar?: () => void }

const Dashboard: React.FC<Props> = (props) => {
    const { teacherName, role, date, shortDate, time, liveClasses, unreadMessages, liveStatus } = { ...args, ...props }
    return (
        <div className="flex h-[50vh] flex-1 flex-col overflow-y-auto lg:h-auto lg:max-h-[90vh] lg:flex-row">
            <ClassroomSection liveClasses={liveClasses} unreadMessages={unreadMessages} />
            <UpcomingClasses liveStatus={liveStatus} onStart={props.onStart} onViewCalendar={props.onViewCalendar} />
        </div>
    );
}

export default Dashboard;


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
