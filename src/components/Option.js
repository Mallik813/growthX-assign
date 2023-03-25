import React, { useState } from "react";
import styles from "./styles.module.css";

const Option = ({ label, value, isSelected, onClick }) => {
    const [blink, setBlink] = useState(false);
  
    const handleClick = () => {
      setBlink(true);
      setTimeout(() => setBlink(false), 3000);
      onClick(value);
    };
  
    return (
      <div
        className={`${styles.option} ${isSelected ? styles.selected : ""}`}
        onClick={handleClick}
      >
        {blink ? (
          <div className={styles.tickMark}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l3 3L13 5v-3L6 9z" fill="#fff" />
            </svg>
          </div>
        ) : (
          ""
        )}
        {label}
      </div>
    );
  };

  export default Option