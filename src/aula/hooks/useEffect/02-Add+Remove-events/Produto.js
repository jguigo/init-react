import React from "react";

const Produto = () => {
   React.useEffect(() => {
      function handleScroll(event) {
         console.log(event);
      }

      window.addEventListener("scroll", handleScroll);

      //NORMALMENTE VAI SER O EFETIO QUE OCORRE ANTES DE DESMONTAR ALGUM ELEMENTO, COMO É NO EXEMPLO DE UM MODAL!
      //Com desmontar eu quero dizer que ele vai desaparecer.
      //return vai ser um evento que vai acontecer assim que um elemento sair da tela!
      //fazendo isso, eu garando que não vou deixar nenhum evento ativo(relacionado ao modal) acontecendo!
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });
   return (
      <div style={{ height: "200vh" }}>
         <p>Meu produto</p>
      </div>
   );
};

export default Produto;
