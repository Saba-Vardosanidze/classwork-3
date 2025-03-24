import styles from "./IncrementButton.module.css";
export default function IncrementButton({ setNumber }) {
  function pluseNumber() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <button className={styles.pluseButton} onClick={pluseNumber}>
      Add +1
    </button>
  );
}
