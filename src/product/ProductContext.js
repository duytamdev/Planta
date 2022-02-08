import React from 'react';
import {createContext} from 'react';
import {getProductForHome, getProductInCartHistory} from './ProductService';

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
  return (
    <ProductContext.Provider value={{onGetProductForHomePage,onGetProductInCartHistory}}>
      {children}
    </ProductContext.Provider>
  );
};
export {ProductContext, ProductProvider};
