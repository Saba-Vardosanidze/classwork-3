import styles from "./DecrementButton.module.css";
export default function DecrementButton({ setNumber }) {
  function decrement() {
    setNumber((prevNumber) => prevNumber - 1);
  }
  return (
    <button className={styles.decrementButton} onClick={decrement}>
      Add -1
    </button>
  );
}
