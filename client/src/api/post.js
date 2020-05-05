import axios from 'axios';
import { baseUrl, jsonContentType } from './config';

export default function post(url, data , contentType = jsonContentType) {
  const headers = { 'Content-Type': contentType };
  const payload = JSON.stringify(data);
  return axios.post(url, payload, {
    headers,
    baseURL: baseUrl
  });
}
