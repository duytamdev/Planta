import axiosInstance from '../utils/axios';

export const login = async (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  return await axiosInstance.post('/api/auth/login', data);
};
export const register = async (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  return await axiosInstance.post('/api/users/register', data);
};
