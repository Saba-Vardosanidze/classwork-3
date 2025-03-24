import { useState } from "react";
import styles from "./Hero.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

export default function Hero() {
  const [number, setNumber] = useState(0);

  return (
    <div className={styles.counterMainContainer}>
      <div className={styles.paragraphContainer}>
        <p className={styles.myParagraph}>{number}</p>
      </div>

      <div className={styles.buttonContainer}>
        <IncrementButton setNumber={setNumber} />
        <DecrementButton setNumber={setNumber} />
      </div>
    </div>
  );
}
