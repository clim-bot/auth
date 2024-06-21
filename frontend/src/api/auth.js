import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
  });
  
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const register = async (userData) => {
    return axiosInstance.post(`/auth/register`, userData);
};

export const login = async (userData) => {
    return axiosInstance.post(`/auth/login`, userData);
};

export const activateAccount = async (token) => {
    return axiosInstance.post(`/auth/activate-account`, { token });
};

export const forgotPassword = async (email) => {
    return axiosInstance.post(`/auth/forgot-password`, { email });
};

export const resetPassword = async (token, passwords) => {
    return axiosInstance.post(`/auth/reset-password`, { token, ...passwords });
};

export const getProfile = async (token) => {
    return axiosInstance.get(`/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const changePassword = async (token, passwords) => {
    return axiosInstance.post(`/profile/change-password`, passwords, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
