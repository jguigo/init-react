import React from "react";

const App = () => {
   function handleClick(event) {
      console.log(event);
   }

   function handleScroll(event) {
      console.log(event);
   }

   window.addEventListener("scroll", handleScroll);

   return (
      <div style={{height: "2000px"}}>
         <button onClick={(event) => alert(event.target.innerText)}>
            Click
         </button>
      </div>
   );
};
export default App;
