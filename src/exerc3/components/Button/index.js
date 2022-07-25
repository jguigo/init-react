import React from "react";

const Button = ({ name, setPreferencia }) => {
   function handleClick({ target }) {
      const buttonName = target.innerText;
      setPreferencia(buttonName);
   }

   return <button onClick={handleClick}>{name}</button>;
};

export default Button;
