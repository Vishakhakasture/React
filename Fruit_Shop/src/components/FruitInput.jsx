import styles from "./FruitInput.module.css";

const FruitInput = () => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Enter fruit item here"
      onChange={(event) => console.log(event.target.value)}
      // using onChange we can handle events enter from users through forms
    />
  );
};

export default FruitInput;
