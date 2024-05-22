import { Wall } from "./interfaceWall"
import { dooorHeight, dooorWidth, windowHeight, windowWidth } from "./windowsDoors"

const maxMetersWall = 50
const minMetersWall = 1
const minHeightWall = dooorHeight + 0.3

export const messageErrors = [
    'O total de área das portas e janelas deve ser no máximo 50% da área de parede',
    'A parede não pode ter menos de 1 metro quadrado',
    'A parede não pode ter mais de 50 metros quadrados',
    'A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta'
]

export const checkRules = (wall: Wall) =>{
    if(getErrors(wall).length === 0){
        return true
    }
    return false
}

export const getErrors = (wall: Wall) =>{
    const { largura, altura, portas, janelas } = wall
    const errors = []
    const areaWall = altura * largura
    const areaDoors = (dooorWidth * dooorHeight) * portas
    const areaWindows = (windowWidth * windowHeight) * janelas

    if((areaDoors + areaWindows) > (areaWall / 2)){
        errors.push(messageErrors[0])
    }
    if(areaWall < minMetersWall){
        errors.push(messageErrors[1])
    }
    if(areaWall > maxMetersWall){
        errors.push(messageErrors[2])
    }
    if((portas > 0) && (altura < minHeightWall)){
        errors.push(messageErrors[3])
    }

    return errors
}