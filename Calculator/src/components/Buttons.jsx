import styles from "./Buttons.module.css";

const Buttons = () => {
  const buttonNames = [
    "C",
    "%",
    "?",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default Buttons;
