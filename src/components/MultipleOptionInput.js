import React from "react";
import Option from "./Option";

const MultipleOptionInput = ({ question, options, value = [], onChange, onKeyDown, limit }) => {
    const handleOptionClick = (newValue) => {
        if (value.includes(newValue)) {
            onChange(value.filter((v) => v !== newValue));
        } else if (value.length < limit) {
            onChange([...value, newValue]);
        }
    };

    return (
        <div className="input-container" onKeyDown={onKeyDown}>
            <label>{question} (select {limit})</label>
            <div>
                {options.map((option) => (
                    <Option
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        isSelected={value.includes(option.value)}
                        onClick={() => handleOptionClick(option.value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MultipleOptionInput;
