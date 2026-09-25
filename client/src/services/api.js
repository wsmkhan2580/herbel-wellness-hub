import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('hwh_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      sessionStorage.removeItem('hwh_admin_token');
      if (window.location.pathname !== '/admin/login') window.location.assign('/admin/login');
    }
    return Promise.reject(error);
  }
);

export default api;
