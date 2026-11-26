// src/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import NotAuthorized from './NotAuthorized';
import { JSX } from 'react/jsx-runtime';

interface RoutAuthProps {
  allowedRoles: string[];
  children: JSX.Element;
}

const RoutAuth = ({ allowedRoles, children }: RoutAuthProps) => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.Account_Type)) {
    return <NotAuthorized />; // or a NotAuthorized component
  }

  return children;
};

export default RoutAuth;