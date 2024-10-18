import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "AC",
    "del",
    ".",
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "=",
  ];
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.button}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
