import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<LegalPage type="privacy" />} />
      <Route path="/terms" element={<LegalPage type="terms" />} />
      <Route path="/disclaimer" element={<LegalPage type="disclaimer" />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/leads" element={<AdminDashboard />} />
      </Route>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
