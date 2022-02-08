import React from 'react';
import type {Node} from 'react';
import MainNavigations from './src/naviagtions/MainNavigations';
import {UserProvider} from './src/user/UserContext';
import {ProductProvider} from './src/product/ProductContext';

const App: () => Node = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <MainNavigations />
      </ProductProvider>
    </UserProvider>
  );
};

export default App;
