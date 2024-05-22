import { initialPaint } from "./initialPaint"
import { Wall } from "./interfaceWall"
import { dooorHeight, dooorWidth, windowHeight, windowWidth } from "./windowsDoors"

const literPerMeter = 5
const areaWindow = windowHeight * windowWidth
const areaDoor = dooorHeight * dooorWidth

const calculateArea = (walls: Wall[]) =>{
    const totalArea = walls.reduce((total, wall) => {
        const wallArea = wall.largura * wall.altura;
        const windowsArea = wall.janelas * areaWindow;
        const doorsArea = wall.portas * areaDoor;
        return total + (wallArea - windowsArea - doorsArea);
    }, 0);

    return totalArea

}

export const calculatePaint = (walls: Wall[]) =>{

    const measures = Object.keys(initialPaint).map(key => parseFloat(key)).sort((a, b) => b - a)
    const totalArea = calculateArea(walls) 
    const totalMeasures = initialPaint
    
    let totalPaintNeeded = totalArea / literPerMeter

    measures.forEach(size => {
        const count = Math.floor(totalPaintNeeded / size);
        totalMeasures[size] = count;
        totalPaintNeeded %= size;
    })

    if (totalPaintNeeded > 0) {
        for (let i = measures.length - 1; i >= 0; i--) {
            const size = measures[i];
            if (size >= totalPaintNeeded) {
                totalMeasures[size]++;
                break;
            }
        }
    }    

    return totalMeasures
    
}