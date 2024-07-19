import 'bootstrap/dist/css/bootstrap.min.css';
import FruitItems from './components/FruitItems';
import ErrorMsg from './components/ErrorMsg';
import './App.css';

function App() {
  let fruitItems = ['Apple','Mango','Banana','Kiwi','Papaya'];
  // let fruitItems = [];
  return (
    <>
      <h1 className='heading'>
        Fruit Shop
      </h1>
      <ErrorMsg items={fruitItems}></ErrorMsg>
      <FruitItems items={fruitItems}></FruitItems>
    </>
  )
}

export default App
