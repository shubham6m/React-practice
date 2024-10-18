// import './App.css'
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  let [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else if (buttonText === "del") {
      const temp = calVal.slice(0, calVal.length - 1);
      setcalVal(temp);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
