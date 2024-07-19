import Item from "./Item";

const FruitItems = ({ items }) => {
  return (
    <ul className="List-group">
      {items.map((item) => <Item key={item} fruitItem={item}></Item>)}
    </ul>
  );
};

export default FruitItems;