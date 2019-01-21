import axios from 'axios';
import config from './config';
import endpoints from './endpoints';

export function get() {
  return axios.get(`${config.BASE_URL}${endpoints.GET_POSTS}`);
}
