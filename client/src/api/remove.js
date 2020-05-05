import axios from 'axios';
import { baseUrl } from './config';

export default function remove(url) {
  return axios.delete(url, {
    baseURL: baseUrl
  });
}
