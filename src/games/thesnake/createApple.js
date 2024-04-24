import {getRandomInt} from "../TTFE/comopnents/finctions/random";
import {isArraysEqual} from "../../functions/checkArrays";

export const createApple = (snake) => {
    let blocks = []
    for(let x = 0; x < 20; x++){
        for(let y = 0; y < 20; y++){
            let includes = false
            for(let block of snake){
                if (isArraysEqual([x,y], block)) {
                    includes = true
                    break;
                }
            }
            if(!includes) blocks.push([x,y])
        }
    }



    return blocks[getRandomInt(0,blocks.length-1)]
}