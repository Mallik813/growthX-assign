import React from "react";
import styles from "./styles.module.css";

const DropDown = ({ question, options, onChange, onKeyDown, value }) => {
    return (
        <div className={styles.inputContainer} onKeyDown={onKeyDown}>
            <label>{question}</label>
            <select onChange={(e) => onChange(e.target.value)} value={value}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;