import axios from 'axios';
import config from './config';

const instance = axios.create({
  baseURL: config.baseUrl,
  headers: {Authorization: `Bearer ${localStorage.id_token}`}
})

export default instance;
