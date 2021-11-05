import axios from 'axios';

axios.interceptors.request.use((config) => {
  // @ts-ignore

  config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
  config.withCredentials = true;
  config.baseURL = 'http://localhost:7777/'
  return config;
});

export {axios};
