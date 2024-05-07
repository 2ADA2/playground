import {isArraysEqual} from "../../functions/checkArrays";
import "./styles/mines.css"
import {checkMines} from "./checkMines";

export const generateField = (mines) => {
    let field = []
    for (let y = 0; y < 15; y++) {
        let row = []
        yScale: for (let x = 0; x < 20; x++) {
            let count = 0
            for (let mine of mines) {
                if (isArraysEqual([x, y], mine)) {
                    row.push([x, y, "m"])
                    count = 0
                    continue yScale
                }
                if (checkMines(x, y, mine)) {
                    // console.log(x + ":" + y + "   :   "+mine + "        = "+ (count+1)  )
                    count += 1;
                }

            }
            row.push([x, y, count])
            count = 0
        }
        field.push({row})
    }
    return field
}
