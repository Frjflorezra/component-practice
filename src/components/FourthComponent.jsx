import React from "react";

export const FourthComponent = () => {
  const hadleClicked = (e) => {
    alert("has hecho click aqui");
  };
  const handleDoubleClick = (e) => {
    alert("haz hecho doble click");
  };
  // 
  const handleMouseEnter =(e) => {
    console.log("ha entrado el mouse en la caja")
  }
  const handleMouseLeave =(e) => {
    console.log("ha salido el mouse en la caja")
  }
  
  const handleMouse =(e, action) => {
    alert(`has ${action} la caja`)
  }
  const handleMouseCl =(e, action) => {
    console.log(`has ${action} la caja`)
  }

  // onFocus
  const insideInput = (e) => {
    console.log("Estás dentro del input, escribe tu nombre!!");
  }

  // onBlur
  const outsideInput = (e) => {
    console.log("Estás FUERA del input, Adiós!!")
  }

  return (
    <div>
      <h2>Eventos de react</h2>
      {/* evento onclick */}
      <div>
        <button
          onClick={() => {
            console.log("hola, soy un evento click!!");
          }}
        >
          Haz click
        </button>
      </div>
      <div>
        <button onClick={hadleClicked}>Aquui tambien haz click</button>
      </div>

      {/* evento doble click */}
      <div>
        <button onDoubleClick={handleDoubleClick}> haz doble click</button>
      </div>
      {/* evento mouse enter y mouse leave */}
      <hr />
      <div id="box">
        <div id="box1" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <p>Pasa el mouse por encima!!!</p>
        </div>
        <div id="box2" 
          onMouseEnter={ e => handleMouse(e, "entrando a")}
          onMouseLeave={ e => handleMouse(e, "salido de")}
          >
          <p>Pasa el mouse por encima!!!</p>
        </div>
        <div id="box3" 
          onMouseEnter={ e => handleMouseCl(e, "entrando a")}
          onMouseLeave={ e => handleMouseCl(e, "salido de")}
          >
          <p>Pasa el mouse por encima!!!</p>
        </div>
      </div>
      {/* evento on focus y on blur*/}
      <div className="mt-4">
        <input type="text" 
          onFocus={ insideInput }
          onBlur={ outsideInput }
          placeholder="Escribe tu nombre"
        />
      </div>

    </div>
  );
};
