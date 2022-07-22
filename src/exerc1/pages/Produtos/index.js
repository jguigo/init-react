import React from "react";
import Produto from "../../components/Produto";
import Title from "../../components/Title";

const produtos = [
   {
      nome: "Notebook",
      propriedades: ["16gb ram", "512gb"],
   },
   {
      nome: "Smartphone",
      propriedades: ["2gb ram", "128gb"],
   },
];

const Produtos = () => {
   return (
      <section>
         <Title>Produtos</Title>
         {produtos.map((produto) => (
            <Produto key={produto.nome} {...produto} />
         ))}
      </section>
   );
};

export default Produtos;
