import { Wall } from "./interfaceWall"

const maxMetersWall = 50
const minMetersWall = 1
const windowHeight = 1.2
const windowWidth = 2
const dooorHeight = 1.9
const dooorWidth = 0.8
const minHeightWall = dooorHeight + 0.3
const literPerMeter = 5

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
        errors.push('O total de área das portas e janelas deve ser no máximo 50% da área de parede')
    }
    if(areaWall < minMetersWall){
        errors.push('A parede não pode ter menos de 1 metro quadrado')
    }
    if(areaWall > maxMetersWall){
        errors.push('A parede não pode ter mais de 50 metros quadrados')
    }
    if((portas > 1) && (altura < minHeightWall)){
        errors.push('A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta')
    }

    return errors
}