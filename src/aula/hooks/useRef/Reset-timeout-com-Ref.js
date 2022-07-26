import React from "react";

const App = () => {
   const [carrinho, setCarrinho] = React.useState(0);
   const [notificacao, setNotificacao] = React.useState(null);
   //criado para guardar valor de ref pro reset do timeout
   const timeoutRef = React.useRef()

   function handleClick() {
      setCarrinho(carrinho + 1);
      setNotificacao("Item adicionado ao carrinho");

      //primeiro ele armazena o valor do timeout no timeoutRef, depois ele vai adicionar esse valor
      //para resetar o timeout com o clearTimeout
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
         setNotificacao(null);
      }, 2000);
   }

   return (
      <div>
         <p>{notificacao}</p>
         <button onClick={handleClick}>Adicionar Carrinho: {carrinho}</button>
      </div>
   );
};

export default App;
