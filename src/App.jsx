import { useRef } from "react";
import "./App.css";
import ButtonsArea from "./components/ButtonsArea";
import { useState } from "react";

function App() {
  const output = useRef();
  const [expiration, serExpiration] = useState("");
  const calc = () => {
    try {
      let result = eval(expiration.replace("x", "*"));

      if (!(result == undefined) && !isNaN(result)) {
        serExpiration(result + "");
        output.current.innerHTML = result + "";
      } else {
        serExpiration("");
        output.current.innerHTML = "NAN";
      }
    } catch (error) {
      serExpiration("");
      output.current.innerHTML = "NAN";
    }
  };
  return (
    <div className="calculator">
      <div className="formulaScreen">{expiration}</div>
      <div ref={output} className="outputScreen" id="display">
        0
      </div>
      <ButtonsArea serExpiration={serExpiration} output={output} calc={calc} />
    </div>
  );
}

export default App;
