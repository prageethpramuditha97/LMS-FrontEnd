import React, { useEffect } from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'
import Login from './Components/auth/Login.tsx';
import PageNoFound from './Pages/PageNoFound'
import NotAuthorized from './Pages/NotAuthorized'
import { get } from './axios/apiClient';
import StudentsMain from './Components/Student/StudentMain.tsx'
import TeacherMain from './Components/Teacher/TeacherMain'
import AdminMain from './Components/Admin/AdminMain'
import LoadingPage from './Pages/LoadingPage'
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';
import RoutAuth from './Pages/RoutAuth'

import { ZoomMeeting } from './Pages/ZoomMeeting'

import { ForgetPassword } from './Components/auth/ForgetPassword'


function App() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const loggedInUser = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const token = localStorage.getItem("logedInUser_eduSpace_codeStack_accessToken");
    
    const fetchData = async () => {
      try {
        const response = await get('api/edu/validate', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if(!response.data.valid){
          localStorage.removeItem("logedInUser_eduSpace_codeStack");
          localStorage.removeItem("logedInUser_eduSpace_codeStack_accessToken");
          localStorage.removeItem("logedInUser_eduSpace_codeStack_accessToken_exp");
          window.location.href= '/';
        }
      } catch {
        
      }
    };
    if(token){fetchData();}
  }, []);

  return (
    <div className="">
      {/* Background token refresher 
      <TokenRefresher />
*/}
      <Routes>
          {/* Redirect root based on user type */}
          <Route path="/" element={
            loggedInUser?
              <Navigate to={"/" + loggedInUser.type + "/"} replace />
              : <Navigate to="/login" replace />
          } />

          <Route path="/login" element={
            loggedInUser?
              <Navigate to={"/" + loggedInUser.type + "/"} replace />
              : <TeacherMain />
          } /> 
          
          <Route path="/Admin/*" element={
            <RoutAuth allowedRoles={['Admin']}>
              <AdminMain />
            </RoutAuth>
          } />

          <Route path="/Teacher/*" element={
            <RoutAuth allowedRoles={['Teacher']}>
              <TeacherMain />
            </RoutAuth>
          } />
          <Route path="/Student/*" element={
            <RoutAuth allowedRoles={['Student']}>
              <StudentsMain />
            </RoutAuth>
          } />
          <Route path="*" element={<PageNoFound />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route path="/404" element={<PageNoFound />} />
          <Route path="/access_denied" element={<NotAuthorized />} />
          <Route path="/join_meeting" element={
            <ZoomMeeting height="0px" />
          } />

      </Routes>
      
      <LoadingPage isOpen={isLoading} />
    </div>
  )
}

export default App