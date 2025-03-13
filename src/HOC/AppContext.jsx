import React, { createContext, useState, useContext, useEffect } from 'react';

const userContext = createContext();

export default function AppContext({ children }) {
    
  return (
    <userContext.Provider
      value={{

      }}
    >
      {children}
    </userContext.Provider>
  );
}


export const useCart = () => useContext(userContext);
