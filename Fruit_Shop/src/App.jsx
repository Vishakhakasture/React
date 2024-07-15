import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // let fruitItems = ['Apple','Mango','Banana','Kiwi','Papaya'];
  let fruitItems = [];
  let emptyMessage = fruitItems.length === 0 ? <h3>Sorry! Fruits not available now</h3> : null;
  return (
    <>
      <h1>
        Fruit Shop
      </h1>
      {emptyMessage}
      <ul className="List-group">
        {fruitItems.map(item => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  )
}

export default App
