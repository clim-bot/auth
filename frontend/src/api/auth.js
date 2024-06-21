import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (userData) => {
    return axios.post(`${API_URL}/auth/register`, userData);
};

export const login = async (userData) => {
    return axios.post(`${API_URL}/auth/login`, userData);
};

export const activateAccount = async (token) => {
    return axios.post(`${API_URL}/auth/activate-account`, { token });
};

export const forgotPassword = async (email) => {
    return axios.post(`${API_URL}/auth/forgot-password`, { email });
};

export const resetPassword = async (token, passwords) => {
    return axios.post(`${API_URL}/auth/reset-password`, { token, ...passwords });
};

export const getProfile = async (token) => {
    return axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const changePassword = async (token, passwords) => {
    return axios.post(`${API_URL}/profile/change-password`, passwords, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
