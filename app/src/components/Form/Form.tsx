import { useState } from 'react'
import { Wall } from '../../utils/interfaceWall'
import { initialWalls } from '../../utils/initialWalls'
import InputsWall from '../InputsWall/InputsWall'

const Form = () => {
    const [walls, setWalls] = useState<Wall[]>(initialWalls)
    const handleChangeWall = (index: Number, name: string, value: Number) => {

    }
    return (
        <section>
            {
                walls.map((wall: Wall, index: Number) => <InputsWall index={index} handleChangeWall={handleChangeWall} wall={wall}/>)
            }
            <div>
                <button>Calcular</button>
            </div>
        </section>
    )
}

export default Form