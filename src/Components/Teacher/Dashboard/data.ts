export type Tile = {
  title: string
  body: string
  link: string
  img: string
  badge?: string
}

export type UpcomingClass = {
  month: string
  day: number
  grade: string
  type: string
  subject: string
  when: string
  meetingId: string
  enrolled: number
}

export const IMG = {
  calendar: 'https://cdn.magicpatterns.com/patterns/generated-images/985ad16e-1f77-4f56-b115-74502df67bbc.jpg',
  students: 'https://cdn.magicpatterns.com/patterns/generated-images/e14ec4bd-dd92-4691-9005-b9485be14cfd.jpg',
  payments: 'https://cdn.magicpatterns.com/patterns/generated-images/92fccb3a-80cd-4916-8173-0b1a43e952cd.jpg',
  sms: 'https://cdn.magicpatterns.com/patterns/generated-images/5a8db7b8-6b67-4052-ac67-4f01e6a32755.jpg',
  messages: 'https://cdn.magicpatterns.com/patterns/generated-images/f6f488a3-a5e1-4386-a05e-58b1a4c04975.jpg',
}

export const TILES: Tile[] = [
  { title: 'Student Management', body: 'Rosters, guardians and attendance.', link: 'Open', img: IMG.students },
  { title: 'Payments', body: 'Class fees, receipts and pending dues.', link: 'Open', img: IMG.payments },
  { title: 'Send SMS', body: 'Reminders and notices to students and guardians.', link: 'Compose', img: IMG.sms },
  { title: 'Messages from Students', body: 'Questions and replies from your classes.', link: 'Open inbox', img: IMG.messages, badge: '2 new' },
]

export const CLASSES: UpcomingClass[] = [
  { month: 'Nov', day: 25, grade: 'Grade 08', type: 'Theory', subject: 'Human digestive system', when: 'Today · 4:00 PM – 5:30 PM', meetingId: '802 4731 037', enrolled: 36 },
  { month: 'Nov', day: 26, grade: 'Grade 07', type: 'Paper Class', subject: 'Model paper discussion', when: 'Tomorrow · 6:30 PM – 8:30 PM', meetingId: '802 4247 978', enrolled: 47 },
  { month: 'Nov', day: 27, grade: 'Grade 10', type: 'Theory', subject: 'Genetics basics', when: 'Friday · 4:30 PM – 6:30 PM', meetingId: '802 5229 934', enrolled: 58 },
  { month: 'Nov', day: 28, grade: 'Grade 06', type: 'Revision', subject: 'Quick-fire quiz', when: 'Saturday · 8:30 AM – 9:30 AM', meetingId: '802 3757 000', enrolled: 38 },
  { month: 'Nov', day: 30, grade: 'Grade 09', type: 'Theory', subject: 'Electric circuits', when: 'Monday · 3:00 PM – 4:30 PM', meetingId: '802 6612 405', enrolled: 41 },
]
