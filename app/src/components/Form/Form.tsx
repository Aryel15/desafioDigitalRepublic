import { useState } from "react";
import { Wall } from "../../utils/interfaceWall";
import { initialWalls } from "../../utils/initialWalls";
import { VscDebugRestart } from "react-icons/vsc";
import InputsWall from "../InputsWall/InputsWall";
import styles from "./form.module.css";

const Form = () => {
  const [walls, setWalls] = useState<Wall[]>(initialWalls);
  const handleChangeWall = (index: Number, property: string, value: Number) => {
    const newWalls = walls.map((wall, i) => {
      if (index === i) {
        return { ...wall, [property]: value };
      }
      return wall;
    });
    setWalls(newWalls);
  };
  return (
    <>
      <section className={styles.container_inputs}>
        {walls.map((wall: Wall, index: Number) => (
          <InputsWall
            index={index}
            handleChangeWall={handleChangeWall}
            wall={wall}
          />
        ))}
      </section>
      <section className={styles.container_buttons}>
        <button className={styles.btn_calculate}>Calcular</button>
        <div className={styles.btns_result}>
          <button className={styles.btn_result}>Resultado</button>
          <button className={styles.btn_restart}>
            <VscDebugRestart />
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
