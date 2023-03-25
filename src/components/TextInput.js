import React from "react";
import styles from "./styles.module.css";

const TextInput = ({ question, onChange, name, step, required, value, onKeyDown }) => {
    return (
        <div className={styles.inputContainer} onKeyDown={onKeyDown}>
            <label >{step}- {question}{required && '*'}</label>
            <input name={name} type="text" onChange={onChange} placeholder="Type your answer here..." value={value} />
        </div>
    );
};

export default TextInput;