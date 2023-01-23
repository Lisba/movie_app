import axios from 'axios';
import { TIMEOUT_LIMIT } from './constants';
import Config from 'react-native-config';

const axiosConfig = {
  baseURL: Config.API_BASE_URL,
  timeout: TIMEOUT_LIMIT,
};

const apiClient = axios.create(axiosConfig);

apiClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${Config.BEARER_TOKEN}`;
  return config;
}, null);

export default apiClient;
