import React from "react";

const larissa = {
   cliente: "Larissa",
   idade: 26,
   compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
   ],
   ativa: true,
};

const guilherme = {
   cliente: "Guilherme",
   idade: 31,
   compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
   ],
   ativa: false,
};

const App = () => {
   const user = larissa;

   const totalGastos = user.compras
      .map((item) => Number(item["preco"].split(" ")[1]))
      .reduce((a, b) => a + b);

   return (
      <>
         <p>Nome: {user.cliente}</p>
         <p>idade: {user.idade}</p>
         <p>
            Situação:{" "}
            <span style={{ color: user.ativa ? "green" : "red" }}>
               {user.ativa ? "Ativa" : "Inativa"}
            </span>
         </p>
         <p>Total gasto: {totalGastos}</p>
         {totalGastos > 10000 && <p>Você esta gastando muito!"</p>}
      </>
   );
};
export default App;
