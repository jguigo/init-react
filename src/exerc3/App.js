import React from "react";
import Button from "./components/Button";
import Produto from "./components/Produto";

const App = () => {
   const [preferencia, setPreferencia] = React.useState(null);

   React.useEffect(() => {
      const preferenciaLocal = window.localStorage.getItem("preferencia");
      if (preferenciaLocal !== null) setPreferencia(preferenciaLocal);
   }, []); //colocar o segundo parametro como um array vazio faz com que o useEffect execute apenas uma vez(quando o site é aberto!!)

   React.useEffect(() => {
      if (preferencia != null)
         window.localStorage.setItem("preferencia", preferencia);
   }, [preferencia]);

   return (
      <section>
         <h1>Preferência: {preferencia}</h1>
         <Button
            name="notebook"
            setPreferencia={setPreferencia}
         />
         <Button
            name="smartphone"
            setPreferencia={setPreferencia}
         />
         <Produto preferencia={preferencia}/>
      </section>
   );
};

export default App;
