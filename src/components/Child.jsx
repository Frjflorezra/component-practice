import React from "react";

export const Child = ({name, addMessage, setName}) => {
  const sendMessage = () => {
    addMessage("Este mensaje del HIJO");
  };
  const changeName=()=>{
    setName("nuevo nombre hijo")
  }
  return (
    <div>
      {name}
      <button onClick={sendMessage}>Enviar mensaje</button>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};
