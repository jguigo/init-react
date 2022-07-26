import React from "react";

const App = () => {
   //com o useRef é possível acessar um elemento e suas propriedades
   const video = React.useRef();

   React.useEffect(() => {
      //O useRef só pode ser utilizando ou dentro de um useEffect ou callback, isso porque é
      //necessário que primeiro seja renderizado pra depois acontecer.
      console.log(video.current.currentTime);
   }, []);

   return <video ref={video} />;
};

export default App;
