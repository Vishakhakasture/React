import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FruitItems from "./components/FruitItems";
import ErrorMsg from "./components/ErrorMsg";
import FruitInput from "./components/FruitInput";
import "./App.css";

function App() {
  let fruitItems = ["Apple", "Mango", "Banana", "Kiwi", "Papaya"];
  // let fruitItems = [];
  return (
    <>
      <Container>
        <h1 className="heading">Fruit Shop</h1>
        <ErrorMsg items={fruitItems}></ErrorMsg>
        <FruitInput />
        <FruitItems items={fruitItems}></FruitItems>
      </Container>
    </>
  );
}

export default App;
