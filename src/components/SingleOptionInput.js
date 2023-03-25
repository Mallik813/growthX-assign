import React, { useState } from "react";
import styles from "./styles.module.css";
import Option from "./Option";

const SingleOptionInput = ({ question, options, value, onChange, onKeyDown }) => {
    const handleChange = (newValue) => {
        onChange(newValue);
    };

    return (
        <div onKeyDown={onKeyDown}>
            <p>{question}</p>
            <div className={styles.optionsContainer}>
                {options.map((option) => (
                    <Option
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        isSelected={option.value === value}
                        onClick={handleChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default SingleOptionInput;



