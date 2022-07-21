import React from "react";

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {

   const ativo = true;
   const random = Math.random();

   function mostrarNome(sobrenome) {
      return "Guilherme " + sobrenome;
   }

   const carro = {
      marca: "Ford",
      rodas: "4",
   };

   const estiloP = {
      color: 'blue',
      fontSize: "2.5rem"

   }

   return (
      <>
         {titulo}
         <p>
            {true ? "teste" : "testen"} - {10}
            {mostrarNome("Melo")}
         </p>
         <p style={estiloP}>{new Date().getFullYear()}</p>
         <p>{carro.marca}</p>
         <p>{carro.rodas}</p>
         <p className={ativo ? "ativo" : "inativo"}>{random * 1000}</p>
      </>
   );
};

export default App;
