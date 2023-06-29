import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_ENDPOINT || 'http://localhost:5000';
const API_PATH = '/wecare';

export const APP_ENVIRONMENT = process.env.NODE_ENV || 'development';

export default axios.create({
  baseURL: BASE_URL + API_PATH,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true,
});
