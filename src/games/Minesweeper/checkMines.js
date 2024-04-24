import {isArraysEqual} from "../../functions/checkArrays";

export function checkMines(x,y, mine) {
    if (
        isArraysEqual([x + 1, y], mine) ||
        isArraysEqual([x + 1, y - 1], mine) ||
        isArraysEqual([x + 1, y + 1], mine) ||
        isArraysEqual([x - 1, y], mine) ||
        isArraysEqual([x - 1, y - 1], mine) ||
        isArraysEqual([x - 1, y + 1], mine) ||
        isArraysEqual([x, y], mine) ||
        isArraysEqual([x, y - 1], mine) ||
        isArraysEqual([x, y + 1], mine)
    ) return true
    return false
}