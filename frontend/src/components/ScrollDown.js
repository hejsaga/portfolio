import React from "react";
import styles from "./css/ScrollDown.module.css";
import { BsArrowDown } from "react-icons/bs";

const ScrollDown = () => {
  return (
    <div className={styles.scrollDownContainer}>
      <span className={styles.arrow}>
        <BsArrowDown />
      </span>
      <div className={styles.scrollDownText}>
        <p>scroll down</p>
      </div>
    </div>
  );
};

export default ScrollDown;
