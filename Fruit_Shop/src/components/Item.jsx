import styles from './Item.module.css';
const Item = ({fruitItem}) => {
  // let {fruitItem} = props;
  return <li className={`${styles["fruit-item"]} list-group-item`}><span className={styles["item"]}>{fruitItem}</span></li>
}

export default Item;