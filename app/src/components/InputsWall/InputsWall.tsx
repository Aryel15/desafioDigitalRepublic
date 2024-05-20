import React from 'react'
import { Wall } from '../../utils/interfaceWall'

interface propsInput {
    wall: Wall, 
    index:Number, 
    handleChangeWall: (index: Number, name: string, value: Number) => void
}

const InputsWall = (props: propsInput) => {
  return (
    <div>
        <div>
            <label htmlFor="Largura">Largura</label>
            <input type="number" id='Largura'/>
        </div>
        <p>x</p>
        <div>
            <label htmlFor="Altura">Altura</label>
            <input type="text" id='Altura'/>
        </div>
        <div>
            <label htmlFor="Portas(s)">Portas(s)</label>
            <input type="text" id='Portas(s)'/>
        </div>
        <div>
            <label htmlFor="Janela(s)">Janela(s)</label>
            <input type="text" id='Janela(s)'/>
        </div>
    </div>
  )
}

export default InputsWall