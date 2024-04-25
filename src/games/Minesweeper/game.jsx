import {isArraysEqual} from "../../functions/checkArrays";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb, faFlag} from "@fortawesome/free-solid-svg-icons";
import {generateField} from "./generateField";
import {createMines} from "./createMines";
import mineStore from "./mineStore";
import {observer} from "mobx-react-lite";
import clearEmpty from "./clearEmpty";

export const Minesweeper = observer(() => {
    const handleClick = (block) => {
        const [x, y, val] = block
        if (!mineStore.start) {
            mineStore.updateField(generateField(createMines([x, y])))
            mineStore.setStart(true)
            mineStore.setOpened(clearEmpty(mineStore.field, x, y, mineStore.opened))
        }
        for (let open of mineStore.opened) {
            if (isArraysEqual([x, y], open)) {
                return
            }
        }
        if (val === 0) mineStore.setOpened(clearEmpty(mineStore.field, x, y, mineStore.opened))
        let newOpened = mineStore.opened.slice()
        newOpened.push([x, y])

        if (val === "m" && !mineStore.win) {
            mineStore.setEnd(true)
        } else if ((mineStore.opened.length === 15 * 20 - 40) && mineStore.end) {
            mineStore.setWin(true)
        }
        mineStore.setOpened(newOpened)
    }

    const addFlag = (e, block) => {
        e.preventDefault()
        const [x, y, val] = block
        let flags = mineStore.detected.slice()
        for (let i in flags) {
            if (isArraysEqual(flags[i], [x, y])) {
                flags.splice(i, 1)
                mineStore.setDetected(flags)
                return
            }
        }
        flags.push([x, y])
        mineStore.setDetected(flags)
    }

    const removeFlag = (e, block) => {
        e.preventDefault()
        const [x, y, val] = block
        let flags = mineStore.detected.slice()
        for (let i in flags) {
            if (isArraysEqual(flags[i], [x, y])) {
                flags.splice(i, 1)
                mineStore.setDetected(flags)
                return
            }
        }
    }

    let newField = []

    for (let row of mineStore.field) {
        let newRow = []
        renderBlocks: for (let block of row.row) {

            for (let detect of mineStore.detected) {
                if (isArraysEqual(detect, block.slice(0, 2))) {
                    newRow.push(<td className={"detected"} onContextMenu={(e) => removeFlag(e, block)}><FontAwesomeIcon
                        icon={faFlag}/></td>)
                    continue renderBlocks
                }
            }
            for (let open of mineStore.opened) {
                if (isArraysEqual(open, block.slice(0, 2))) {
                    if (block[2] === "m") {
                        newRow.push(<td
                            className={"opened bomb"}
                            onContextMenu={(e) => e.preventDefault()}>
                            <FontAwesomeIcon icon={faBomb}/>
                        </td>)
                        continue renderBlocks
                    }

                    newRow.push(<td
                        className={"opened"}
                        onContextMenu={(e) => e.preventDefault()}>
                        {block[2] || ""}
                    </td>)
                    continue renderBlocks
                }
            }

            newRow.push(<td
                className={"closed"}
                onClick={() => handleClick(block)}
                onContextMenu={(e) => addFlag(e, block)}
            ></td>)
        }

        newField.push(<tr>{newRow}</tr>)
    }
    return (
        <>
            <section className={"mine-loose"} style={{display: (mineStore.end) ? "block" : "none"}}>
                <h3>Вы проиграли!</h3>
                <button onClick={() => mineStore.restart()}>Заново</button>
            </section>
            <section className={"mine-loose"} style={{display: (mineStore.win) ? "block" : "none"}}>
                <h3>Вы выиграли!</h3>
                <button onClick={() => mineStore.restart()}>Заново</button>
            </section>
            <table className={"mine-field"} onContextMenu={(e) => e.preventDefault()}>
                {newField}
            </table>
        </>

    )
})