import React from "react";
import styles from "./inputnumber.module.css";

interface propsInput {
  value: Number;
  id: string;
  property: string;
  changeInputValue: (property: string, value: Number) => void;
}

const InputNumber = (props: propsInput) => {
    const { property, id, value, changeInputValue } = props;
    return (
        <div className={styles.box}>
            <button
                className={styles.button}
                onClick={() => changeInputValue(property, +value - 1)}
            >
                -
            </button>
            <input
                type="number"
                name={property}
                id={id}
                value={value.toString()}
                className={styles.input}
                onChange={(e) => changeInputValue(property, parseInt(e.target.value))}
            />
            <button 
                className={styles.button}
                onClick={() => changeInputValue(property, +value + 1)}
            >
                +
            </button>
        </div>
    );
};

export default InputNumber;
