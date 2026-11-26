import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import TopBar from './TopBar/TopBar';

import './TopBar/topBar.css'


function TeacherMain() {
  
  return (
    <div className="flex min-h-screen bg-gray-200/60 flex-col overflow-hidden bg-page font-sans text-ink">
      <TopBar
          name="Dilani Fernando"
          role="Science Teacher"
          liveClock={true}
          onProfile={() => console.log('Profile clicked')}
          onLogout={() => console.log('Logout clicked')}
        />

        <Routes>
          <Route path="/" element={<Navigate to="/Teacher/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default TeacherMain;