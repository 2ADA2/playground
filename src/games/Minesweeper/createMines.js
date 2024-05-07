import {getRandomInt} from "../TTFE/comopnents/finctions/random";
import {checkMines} from "./checkMines";
import {isArraysEqual} from "../../functions/checkArrays";

export function createMines(block = [-10, -10]) {
    let mines = []
    for (let i = 0; i < 40; i++) {
        calcMine: while (true) {
            let x = getRandomInt(0, 19)
            let y = getRandomInt(0, 14)
            for (let mine of mines) {
                let count = 0
                if (checkMines(x, y, mine)) count += 1

                if (isArraysEqual([x, y], mine)) {
                    continue calcMine
                }
                if (checkMines(x, y, block)) continue calcMine

                if (count > 5) continue calcMine
            }
            mines.push([x, y])
            break
        }
    }
    return mines
}