import axios from 'axios';
/**
 * dsa
 */
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
