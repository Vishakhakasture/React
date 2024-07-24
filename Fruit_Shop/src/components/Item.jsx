import styles from "./Item.module.css";
const Item = ({ fruitItem, handleBuyButton }) => {
  // let {fruitItem} = props;
  // const handleBuyButton = (event) => {
  //   //event get
  //   // (fruitItem) can be used instead
  //   console.log(event);
  //   console.log(`${fruitItem} item being bought`);
  // };
  return (
    <>
      <li className={`${styles["fruit-item"]} list-group-item`}>
        <span className={styles["item"]}>{fruitItem}</span>
        <button
          className={`${styles["buy-item"]} btn btn-success`}
          //when onClick encounters it also passes event object it creats its own object
          // its very important in react this class is type of synthetic based event it works on the basis of operatin system devices like android,ios and many
          onClick={handleBuyButton} // handleBuyButton just this used then this is invoked method
          //() => handleBuyButton(fruitItem) can be used instead
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
