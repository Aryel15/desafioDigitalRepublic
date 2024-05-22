import { useState } from "react";
import { Wall } from "../../utils/interfaceWall";
import { initialWalls } from "../../utils/initialWalls";
import { VscDebugRestart } from "react-icons/vsc";
import InputsWall from "../InputsWall/InputsWall";
import styles from "./form.module.css";
import { checkRules, getErrors } from "../../utils/checkRules";
import AlertErrors from "../AlertErrors/AlertErrors";
import { initialPaint } from "../../utils/initialPaint";
import { calculatePaint } from "../../utils/calculatePaint";
import ModalResult from "../ModalResult/ModalResult";

const Form = () => {
  const [walls, setWalls] = useState<Wall[]>(initialWalls);
  const [paint, setPaint] = useState(initialPaint)
  const [showResult, setShowResult] = useState(false)

  const handleChangeWall = (index: Number, property: string, value: Number) => {
    const newWalls = walls.map((wall, i) => {
      if (index === i) {
        return { ...wall, [property]: value };
      }
      return wall;
    });
    setWalls(newWalls);
  };

  const checkAllRules = () =>{
    return walls.every((wall: Wall) => checkRules(wall))
  }

  const calculateTotalPaint = () =>{
    setPaint(calculatePaint(walls));
    setShowResult(true)
  }

  const restart = () =>{
    setWalls(initialWalls)
    setPaint(initialPaint)
    setShowResult(false)
  }

  return (
    <>
      {showResult && <ModalResult paint={paint} onClose={() => setShowResult(false)}/>}
      <section className={styles.container_inputs}>
        {walls.map((wall: Wall, index: Number) => (
          <div>
            <InputsWall
              index={index}
              handleChangeWall={handleChangeWall}
              wall={wall}
            />
            {!checkRules(wall) &&
              <AlertErrors quantity={getErrors(wall).length} errors={getErrors(wall)}/>
            }
          </div>
        ))}
      </section>
      <section className={styles.container_buttons}>
        <button className={styles.btn_calculate} disabled={!checkAllRules()} onClick={calculateTotalPaint}>
          Calcular
        </button>
        {checkAllRules() && 
        <div className={styles.btns_result}>
          <button className={styles.btn_result} onClick={() => setShowResult(true)}>Resultado</button>
          <button className={styles.btn_restart} onClick={restart}>
            <VscDebugRestart />
          </button>
        </div>}
      </section>
    </>
  );
};

export default Form;
