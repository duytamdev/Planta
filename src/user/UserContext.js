import {createContext} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{name: 'test'}}>
      {children}
    </UserContext.Provider>
  );
};
export {UserContext, UserProvider};
