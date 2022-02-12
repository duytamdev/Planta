import React, {createContext, useState} from 'react';
import {
  getDetailInfoProduct,
  getProductByCategoryAndType,
  getProductByName,
  getProductForHome,
  getProductInCartHistory,
  saveCartToDatabase,
} from './ProductService';

const ProductContext = createContext();
const ProductProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const onGetProductForHomePage = async () => {
    try {
      const res = await getProductForHome();
      if (res.error === false) {
        return res.data;
      }
    } catch (e) {
      console.log('onGetProductForHomePage Error', e);
    }
    return [];
  };
  const onGetProductInCartHistory = async () => {
    try {
      const res = await getProductInCartHistory();
      if (res.error === false) {
        return res.data;
      }
    } catch (e) {
      console.log('onGetProductInCart Error', e);
    }
    return [];
  };
  const onGetProductByName = async name => {
    try {
      const res = await getProductByName(name);
      if (res.error === false) {
        return res.data;
      }
    } catch (e) {
      console.log('onGetProductByName Error', e);
    }
    return [];
  };
  const onGetProductByCategoryAndType = async (categoryToken, type) => {
    try {
      const res = await getProductByCategoryAndType(categoryToken, type);
      if (res.error === false) {
        return res.data;
      }
    } catch (e) {
      console.log('onGetProductByName Error', e);
    }
    return [];
  };
  const onGetDetailInfoProduct = async productId => {
    try {
      const res = await getDetailInfoProduct(productId);
      if (res.error === false) {
        return res.data;
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };
  const onSaveCart = async cart => {
    try {
      const res =await saveCartToDatabase(cart);
      return res;
    } catch (e) {
      console.log(e);
    }
    return [];
  };
  return (
    <ProductContext.Provider
      value={{
        onGetProductForHomePage,
        onGetProductInCartHistory,
        onGetProductByName,
        onGetProductByCategoryAndType,
        onGetDetailInfoProduct,
        onSaveCart,
        cart,
        setCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
export {ProductContext, ProductProvider};
