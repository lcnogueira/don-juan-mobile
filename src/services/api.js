import axios from 'axios';
import store from '~/store';

const api = axios.create({
  baseURL: 'http://af4fc194.ngrok.io',
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
