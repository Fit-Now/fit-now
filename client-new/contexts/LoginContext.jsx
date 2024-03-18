import { Children, ReactNode, createContext, useState } from "react";
import React from "react";

// type LoginContextType = {
//   isLoggedIn: boolean,
//   setIsLoggedIn: (isLoggedIn: boolean) => void,
// };

// export const LoginContext =
//   createContext <
//   LoginContextType >
//   {
//     isLoggedIn: false,
//     setIsLoggedIn: () => {},
//   };

export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const contextValue = {
  //   setIsLoggedIn: setIsLoggedIn,
  //   isLoggedIn: isLoggedIn,
  // };
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
