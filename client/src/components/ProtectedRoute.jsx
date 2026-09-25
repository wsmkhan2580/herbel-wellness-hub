import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const token = sessionStorage.getItem('hwh_admin_token');
  return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
