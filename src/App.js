import logo from "./logo.svg";
import "./App.css";
import { MyComponent } from "./components/MyComponent";
import { SecondComponent } from "./components/SecondComponent";
import { ThirdComponent } from "./components/ThirdComponent";
import { Child } from "./components/Child";
import { useState } from "react";
import { FourthComponent } from "./components/FourthComponent";

function App() {
  const [name, setName] = useState("lina");
  const [message, setMessage] = useState("")

  const addMessage = (message) => {
    console.log(message)
    setMessage(message)
  }

  const medicalRecord = {
    height: "160",
    bloodgroup: "RhO+",
    allergies: "None",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>

          <hr />
          <FourthComponent/>
          <hr />
        </div>

        <p>Estructura inicial del proyecto y limpia.</p>
        <p>{message}</p>
        <Child name={name} setName={setName} addMessage={addMessage}/>
        <ThirdComponent
          name={123}
          lastName="Florez"
          card={medicalRecord}
        />
        <SecondComponent />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
