import React from "react";

const Produtos = ({ dados }) => {
   const { nome, fotos, preco, descricao } = dados;
   return (
      <section>
         <h1>{nome}</h1>
         <p>{preco}</p>
         <img src={fotos[0].src} alt={fotos[0].titulo}/>
         <p>{descricao}</p>
         
      </section>
   );
};

export default Produtos;
