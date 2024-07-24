import Item from "./Item";

const FruitItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fruitItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FruitItems;
