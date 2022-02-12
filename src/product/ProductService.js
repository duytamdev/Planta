import axiosInstance from '../utils/axios';

export const getProductForHome = async () => {
  return await axiosInstance.get('/api/products/get-for-home-page');
};
export const getProductInCartHistory = async () => {
  return await axiosInstance.get('/api/carts/get-all');
};
export const getProductByName = async name => {
  return await axiosInstance.get(`/api/products/search?name=${name}`);
};
export const getDetailInfoProduct = async productToken => {
  return await axiosInstance.get(`/api/products/${productToken}/view`);
};
export const typeOfCategory = {
  newProduct: 1,
  bestSell: 2,
  allProduct: 3,
};
export const getProductByCategoryAndType = async (categoryToken, type) => {
  return await axiosInstance.get(
    `/api/products/search-by-category-and-type?category=${categoryToken}&type=${type}`,
  );
};
export const saveCartToDatabase = async cart => {
  return await axiosInstance.post('/api/carts', cart);
};
