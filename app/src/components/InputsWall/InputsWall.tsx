import { Wall } from '../../utils/interfaceWall'
import styles from './inputswall.module.css'
import InputNumber from '../InputNumber/InputNumber'

interface propsInputs {
    wall: Wall, 
    index:number, 
    handleChangeWall: (index: number, property: string, value: number) => void
}

const InputsWall = (props: propsInputs) => {
    const propertiesWall = ['largura', 'altura', 'portas', 'janelas']
    const { wall, index, handleChangeWall} = props    

    const changeInputValue = (property: string, value: number) =>{
        handleChangeWall(index, property, value)
    }
  return (
    <div className={styles.container_inputs}>
        {
            propertiesWall.map((property) => (
            <>
                <div className={styles.container_input}>
                    <label 
                        htmlFor={`${property}-${index}`} 
                        className={styles.label}>
                        {property}
                    </label>
                    <InputNumber
                        id={`${property}-${index}`}
                        value={wall[property as keyof Wall]}
                        property={property}
                        changeInputValue={changeInputValue}
                    />
                </div>
                {property === 'largura' && <p className={styles.x}>x</p>}
            </>
            ))
        }

        
    </div>
  )
}

export default InputsWall