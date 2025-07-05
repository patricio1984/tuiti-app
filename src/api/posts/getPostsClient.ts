import { axiosInstance } from '@/lib/axios';
import type { AxiosRequestConfig } from 'axios';
import type { Post } from '../jSONPlaceholderAPI.schemas';

export const getPosts = (config?: AxiosRequestConfig) => {
  return axiosInstance<Post[]>({
    url: '/posts',
    method: 'GET',
    ...config,
  }).then((res) => res.data);
};
