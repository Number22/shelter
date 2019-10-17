import axios, { AxiosRequestConfig } from 'axios';

import { apiKey, apiUrl } from './constants';

const config: AxiosRequestConfig = {
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: apiKey,
    format: 'json',
  },
};

export const client = axios.create(config);
