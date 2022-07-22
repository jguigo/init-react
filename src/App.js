import React from "react";
import ButtonModal from "./ButtonModal";
import { Modal } from "./Modal";

const App = () => {
   const [modal, setModal] = React.useState(false);
   const [items, setItems] = React.useState('Teste');

   function handleClick(){
      setItems("outros")
   }

   return (
      <div>
         <p>{items}</p>
         <button onClick={handleClick}>Clicar</button>
         <Modal modal={modal} setModal={setModal} />
         <ButtonModal setModal={setModal} />
      </div>
   );
};

export default App;
