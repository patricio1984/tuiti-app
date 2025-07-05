import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

export const axiosInstance = <T>(config: AxiosRequestConfig) =>
  axios.request<T>({
    baseURL: 'https://jsonplaceholder.typicode.com',
    ...config,
  });
