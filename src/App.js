import React from "react";

const App = () => {
   const [contar, setContar] = React.useState(0);
   const [items, setItems] = React.useState([]);

   function handleClick() {
      setContar((contar) => contar + 1);
      setItems((items) => [...items, "Item " + (contar + 1)]);
   }

   return (
      <div>
         <button onClick={handleClick}>{contar}</button>
         {items.map((item) => (
            <li key={item}>{item}</li>
         ))}
      </div>
   );
};

export default App;
