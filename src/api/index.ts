import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default {
  get: async (url: string) => await axiosInstance.get(url),
};
