import React from "react";
import Form from "./Form/Form";

const Titulo = (props) => {
   return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const Titulo2 = (props) => {
   return <h1>{props.children}</h1>;
};

const Titulo3 = (props) => {
   return (
      <h1 style={{ color: props.cor }}>
         {props.texto}, {props.children}
      </h1>
   );
};

const App = () => {
   return (
      <div>
         <Titulo cor="blue" texto="Testando1" />
         <Titulo2>Testando children</Titulo2>
         <Titulo3 cor="green" texto="Misturando o props">com o children</Titulo3>
         <Form />
      </div>
   );
};
export default App;
