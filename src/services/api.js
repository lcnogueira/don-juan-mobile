import axios from 'axios';
import store from '~/store';

const api = axios.create({
  baseURL: 'http://8f624471.ngrok.io',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  headers.DEVICE = 'mobile';

  return { ...config, headers };
});

export default api;
