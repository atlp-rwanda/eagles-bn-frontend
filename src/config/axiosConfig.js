import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function axiosConfig(axios) {

  if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:5000/api/';
  } else {
    axios.defaults.baseURL = 'http://eagles-bn-backend-staging.herokuapp.com/api/';
  }
  axios.interceptors.request.use((config) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      config.headers = {
        'auth-token': `${token}`,
        Accept: 'application/json',
      };
    }
    return config;
  },
  (error) => Promise.reject(error));

  axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
      if (error.response && error.response.status === 401) {
        // Logout the user
      }
      if (error.response && error.response.status === 500) {
        toast.error('Something went wrong. Try reloading...');
      }
      return Promise.reject(error);
    },
  );
}
