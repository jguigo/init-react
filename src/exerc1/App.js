import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

const App = () => {
   const { pathname } = window.location;
   console.log(pathname);
   return (
      <>
         <Header />
         {pathname === "/" ? <Home /> : <Produtos />}
      </>
   );
};
export default App;
