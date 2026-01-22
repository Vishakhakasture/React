import Display from "./components/Display";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValaue = calVal + buttonText;
      setCalVal(newDisplayValaue);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
