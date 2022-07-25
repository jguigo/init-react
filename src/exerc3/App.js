import React from "react";
import Button from "./components/Button";

const App = () => {
   const [preferencia, setPreferencia] = React.useState(null)

   return (
      <section>
         <h1>Preferência: {preferencia}</h1>
         <Button nome="notebook" setPreferencia={setPreferencia}/>
         <Button nome="smartphone" setPreferencia={setPreferencia}/>
      </section>
   );
};

export default App;
