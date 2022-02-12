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
export const updateInfo = async (name, address, phone, avt, dob) => {
  const data = {
    name: name,
    address: address,
    phone: phone,
    avatar: avt,
    dob: dob,
  };
  return await axiosInstance.post('api/users/update-profile', data);
};
export const getInfo = async () => {
  return await axiosInstance.get('api/users/update-profile');
};
