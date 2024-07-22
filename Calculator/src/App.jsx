import Display from "./components/Display";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";

function App() {
  return (
    <center>
      <div className={styles.calculator}>
        <Display />
        <Buttons />
      </div>
    </center>
  );
}

export default App;
