import React from "react";

const App = () => {
   const [comentarios, setComentarios] = React.useState([]);
   const [input, setInput] = React.useState("");
   const inputElement = React.useRef();

   function handleClick() {
      setComentarios([...comentarios, input]);
      setInput("");

      //depois de apertar em "enviar" ele volta a focar no elemento com ref do useRef()
      inputElement.current.focus();
   }

   return (
      <div>
         <ul>
            {comentarios.map((comentario) => (
               <li key={comentario}>{comentario}</li>
            ))}
         </ul>
         <input
            type="text"
            ref={inputElement}
            value={input}
            onChange={({ target }) => setInput(target.value)}
         />
         <br />
         <button onClick={handleClick}>Enviar</button>
      </div>
   );
};

export default App;
