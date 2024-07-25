import styles from "./FruitInput.module.css";

const FruitInput = ({ handleKeyDown }) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Enter fruit item here"
      onKeyDown={handleKeyDown}
      // using onChange we can handle events enter from users through forms
    />
  );
};

export default FruitInput;
