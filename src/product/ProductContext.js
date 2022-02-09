import React from 'react';
import {createContext} from 'react';
import {
  getProductByCategoryAndType,
  getProductByName,
  getProductForHome,
  getProductInCartHistory,
} from './ProductService';

const ProductContext = createContext();
const ProductProvider = ({children}) => {
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
  return (
    <ProductContext.Provider
      value={{
        onGetProductForHomePage,
        onGetProductInCartHistory,
        onGetProductByName,
        onGetProductByCategoryAndType,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
export {ProductContext, ProductProvider};
