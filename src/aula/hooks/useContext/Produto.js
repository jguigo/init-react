import React from 'react'
import {GlobalStorage} from './GlobalContext'

const Produto = () => {
   const global = React.useContext(GlobalStorage)

   function handleClick(){
      global.setContar((contar) => contar+1)
   }

  return (
    <div>Produto {global.contar} <button onClick={handleClick}></button></div>
  )
}

export default Produto