import React from "react";
import ButtonModal from "./ButtonModal";
import { Modal } from "./Modal";

const App = () => {
   let [ativo, setAtivo] = React.useState(false);
   const [dados, setDados] = React.useState({ nome: "Guilherme", idade: 27 });
   const [modal, setModal] = React.useState(false);

   function handleClick() {
      setAtivo(!ativo);
      setDados({ ...dados, faculdade: "UNISSAU" });
   }

   return (
      <div>
         <div>
            <p>{dados.nome}</p>
            <p>{dados.idade}</p>
            <p>{dados.faculdade}</p>
            <button onClick={handleClick}>{ativo ? "ativo" : "inativo"}</button>
         </div>
         <Modal modal={modal} setModal={setModal} />
         <ButtonModal setModal={setModal} />
      </div>
   );
};

export default App;
