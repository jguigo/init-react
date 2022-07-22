import React from "react";

export const Modal = ({ modal, setModal }) => {
   if (modal === true) {
      return (
         <div>
            Esse é um modal.{" "}
            <button onClick={() => setModal(false)}>Fechar</button>
         </div>
      );
   }
   return null

};
