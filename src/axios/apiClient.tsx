import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Create an Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://eduspaceserver-5d007c54940a.herokuapp.com/",
  //baseURL: 'https://eduspaceserver.codestack.lk/',
  //baseURL: "http://localhost:8081/",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Wrapper functions (Optional)
export const get = <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiClient.get<T>(url, config);
};

export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiClient.post<T>(url, data, config);
};

export const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiClient.put<T>(url, data, config);
};

export const del = <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return apiClient.delete<T>(url, config);
};

export default apiClient;