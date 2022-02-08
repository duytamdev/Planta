import React from 'react';
import {createContext} from 'react';
import {getProductForHome} from './ProductService';

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
  return (
    <ProductContext.Provider value={{onGetProductForHomePage}}>{children}</ProductContext.Provider>
  );
};
export {ProductContext, ProductProvider};
