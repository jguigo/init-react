import React from "react";

// primeiro crio e exporto o meu contexto
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
   const [contar, setContar] = React.useState(0)

   return (
      <GlobalContext.Provider value={{contar, setContar}} >
         {children}
      </GlobalContext.Provider>
   );
};
