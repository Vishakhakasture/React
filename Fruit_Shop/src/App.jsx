import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FruitItems from "./components/FruitItems";
import ErrorMsg from "./components/ErrorMsg";
import FruitInput from "./components/FruitInput";
import "./App.css";
import { useState } from "react";

function App() {
  // let fruitItems = ["Apple", "Mango", "Banana", "Kiwi", "Papaya"];

  let [fruitItems, setFruitItems] = useState([]);

  // console.log(`current value of text is: ${textToShow}`);
  // let fruitItems = [];
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFruitItem = event.target.value;
      event.target.value = "";
      let newItems = [...fruitItems, newFruitItem];
      setFruitItems(newItems);
      // console.log(`Fruit entered is ${newFruitItem}`);
    }
    // console.log(event.target.value);
    // setTextToShow(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="heading">Fruit Shop</h1>
        <FruitInput handleKeyDown={onKeyDown} />
        <ErrorMsg items={fruitItems}></ErrorMsg>
        <FruitItems items={fruitItems}></FruitItems>
      </Container>
    </>
  );
}

export default App;
