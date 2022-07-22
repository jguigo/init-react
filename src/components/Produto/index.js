import React from "react";

const Produto = ({nome, propriedades}) => {
   const style = {
      border: "2px solid",
      margin: "1rem 0",
      padding: "1rem",
   };
   return (
      <div style={style}>
         <p>{nome}</p>
         <ul>
            {propriedades.map((prop) => (
               <li key={prop}>{prop}</li>
            ))}
         </ul>
      </div>
   );
};

export default Produto;
