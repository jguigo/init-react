import React from "react";

const ButtonModal = ({ setModal }) => {
   function handleClick() {
    //é possivel pegar o valor anterior sem ele ter sido passo! Basta utilizar o parâmetro do "setAlgumaCoisa"
      setModal((ativo) => !ativo);
   }

   return <button onClick={handleClick}>Abrir</button>;
};

export default ButtonModal;
