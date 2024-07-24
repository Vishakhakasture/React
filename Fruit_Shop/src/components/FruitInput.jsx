import styles from "./FruitInput.module.css";

const FruitInput = ({ handleOnChange }) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Enter fruit item here"
      onChange={handleOnChange}
      // using onChange we can handle events enter from users through forms
    />
  );
};

export default FruitInput;
