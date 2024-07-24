import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FruitItems from "./components/FruitItems";
import ErrorMsg from "./components/ErrorMsg";
import FruitInput from "./components/FruitInput";
import "./App.css";

function App() {
  let fruitItems = ["Apple", "Mango", "Banana", "Kiwi", "Papaya"];
  let textToShow = "Fruit entered by the user is..";
  // let fruitItems = [];
  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="heading">Fruit Shop</h1>
        <ErrorMsg items={fruitItems}></ErrorMsg>
        <FruitInput handleOnChange={handleOnChange} />
        <p>{textToShow}</p>
        <FruitItems items={fruitItems}></FruitItems>
      </Container>
    </>
  );
}

export default App;
