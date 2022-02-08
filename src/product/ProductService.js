import axiosInstance from '../utils/axios';

export const getProductForHome = async () => {
  const res = await axiosInstance.get('/api/products/get-for-home-page');
  return res;
};
export const getProductInCartHistory = async () => {
  const res = await axiosInstance.get('/api/carts/get-all');
  return res;
};
