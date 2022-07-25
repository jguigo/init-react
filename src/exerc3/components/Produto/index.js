import React from "react";

const Produto = ({ preferencia }) => {
   const [dados, setDados] = React.useState(null);

   React.useEffect(() => {
      if (preferencia !== null)
         fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`)
         .then(response => response.json())
         .then(json => setDados(json));
   }, [preferencia]);

   if (dados === null) return null;
   return (
      <div>
         <h1>{dados.nome}</h1>
         <p>{dados.preco}</p>
      </div>
   );
};

export default Produto;
