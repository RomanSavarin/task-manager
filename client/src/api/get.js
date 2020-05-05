import axios from 'axios';
import { baseUrl } from './config';

export default function get(url) {
  return axios.get(url, {
    baseURL: baseUrl
  });
}
