import {isArraysEqual} from "../../functions/checkArrays";

export default function clearEmpty(field, x, y, opened) {
    let empties = [[x, y]]

    const includesArr = (arr, arrs) => {
        for (let i of arrs) {
            if (isArraysEqual(arr, i)) return true
        }
        return false
    }

    const checkBlock = (x, y) => {
        if (y < 0 || y > 14 || x < 0 || x > 19) return false
        if (field[y].row[x][2] === 0) {
            if (!includesArr(field[y].row[x], empties)) empties.push(field[y].row[x])
            return true
        }
        return false
    }

    while (true) {
        let oldLen = empties.length
        for (let block of empties) {
            checkBlock(block[0] + 1, block[1])
            checkBlock(block[0] + 1, block[1] + 1)
            checkBlock(block[0] + 1, block[1] - 1)
            checkBlock(block[0] - 1, block[1] + 1)
            checkBlock(block[0] - 1, block[1])
            checkBlock(block[0] - 1, block[1] - 1)
            checkBlock(block[0], block[1] + 1)
            checkBlock(block[0], block[1] - 1)

        }
        if (oldLen === empties.length) {
            break
        }
    }

    empt: for (let block of empties) {
        for (let i of opened) {
            if (isArraysEqual(i, block)) {
                continue empt;
            }
        }
        opened.push(block.slice(0, 2))
    }

    const checkAdd = (x, y) => {
        if (y < 0 || y > 14 || x < 0 || x > 19) return false
        for (let block of opened) {
            if (isArraysEqual([x, y], block)) return
        }
        opened.push([x, y])
    }

    for (let block of opened.slice()) {
        if (field[block[1]].row[block[0]][2] !== 0) {
            continue
        }
        checkAdd(block[0] + 1, block[1])
        checkAdd(block[0] + 1, block[1] - 1)
        checkAdd(block[0] + 1, block[1] + 1)
        checkAdd(block[0] - 1, block[1])
        checkAdd(block[0] - 1, block[1] - 1)
        checkAdd(block[0] - 1, block[1] + 1)
        checkAdd(block[0], block[1] - 1)
        checkAdd(block[0], block[1] + 1)
    }

    return opened
}