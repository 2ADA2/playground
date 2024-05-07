import {isArraysEqual} from "../../functions/checkArrays";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb, faClock, faFlag, faGamepad, faSearch, faSmile} from "@fortawesome/free-solid-svg-icons";
import {generateField} from "./generateField";
import {createMines} from "./createMines";
import mineStore from "./mineStore";
import {observer} from "mobx-react-lite";
import clearEmpty from "./clearEmpty";
import {BlockLink} from "../../components/link";
import {faWikipediaW, faYoutube} from "@fortawesome/free-brands-svg-icons";

import("./styles/mineAnimation.css")

export const Minesweeper = observer(() => {
    const handleClick = (block) => {
        if (mineStore.end || mineStore.win) return;
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
        console.log(mineStore.opened.length)
        if (val === "m" && !mineStore.win) {
            mineStore.setEnd(true)
        }
        mineStore.setOpened(newOpened)
    }

    const addFlag = (e, block) => {
        if (mineStore.end || !mineStore.start || mineStore.win) return;
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
        if (mineStore.win || mineStore.end) return;
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
            <section className={"mine-header-container"}>
                <div className={"mine-header-anim-container"} style={{height: "2040px"}}>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}></div>
                    <div className={"mine-header-anim"}><FontAwesomeIcon icon={faFlag}/></div>
                    <div className={"mine-header-anim"}><FontAwesomeIcon icon={faBomb}/></div>
                    <div className={"mine-header-anim"}><FontAwesomeIcon icon={faSearch}/></div>
                    <div className={"mine-header-anim"}><FontAwesomeIcon icon={faFlag}/></div>
                </div>

                <div className={"mine-logo"}><FontAwesomeIcon icon={faBomb}/></div>
                <section className={"mine-header"}>
                    <h2>Minesweeper</h2>
                    <span style={{fontWeight: "100"}}>сапёр</span>
                </section>
            </section>

            <section className={"mine-links"}>
                <div>
                    <BlockLink
                        link={"https://www.youtube.com/watch?v=tDwTRwjRMYE"}
                        elem={<FontAwesomeIcon icon={faYoutube}/>}
                        header={"Как играть"}
                        text={"посмотрите обучающий ролик"}
                    />
                    <BlockLink
                        link={"https://minesweeper.online/"}
                        elem={<FontAwesomeIcon icon={faGamepad}/>}
                        header={"Другой сайт"}
                        text={"В интернете есть еще много сайтов с играми"}
                    />
                    <BlockLink
                        link={"https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BF%D1%91%D1%80_(%D0%B8%D0%B3%D1%80%D0%B0)"}
                        elem={<FontAwesomeIcon icon={faWikipediaW}/>}
                        header={"Подробнее"}
                        text={"Узнайте подробнее на Wiki"}
                    />
                </div>
                <section className={"mine-rules"}>
                    <h3>Правила</h3>
                    <p>У вас есть поле 15 на 20, вам нужно "раскопать" все ячейки в которых нет бомбы</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faSearch}/> Вам нужно раскопать 260 ячеек не попадясь на бомбу. До
                            старости доживает не тот сапер, который чувствует, где мины, а тот, кто их ставит :)
                        </li>
                        <li><FontAwesomeIcon icon={faFlag}/> Вы можете поставить указатель на ПКМ или снять его. Не
                            промахнитесь, сапер ошибается лишь однажды :)
                        </li>
                        <li><FontAwesomeIcon icon={faClock}/> Когда вы разберётесь, попробуйте зачистить поле как можно
                            быстрее. Одна нога здесь другая там :)
                        </li>
                        <li><FontAwesomeIcon icon={faBomb}/> Если попадётесь на бомбу, игра закончится. Сапёра от
                            дисантника отличает лишь направление полета :)
                        </li>
                        <li><FontAwesomeIcon icon={faSmile}/>"Ноги моей здесь больше не будет" - сказал сапер наступая
                            на мину :)
                        </li>
                    </ul>
                </section>
            </section>

            <section className={"mine-info-panel"}>
                <div className={"panel-attributes"}>
                    <div>
                        <span><FontAwesomeIcon icon={faSearch}/></span>
                        <span>{mineStore.opened.length + "/" + 260}</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faFlag}/></span>
                        <span>{40 - mineStore.detected.length}</span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faClock}/></span>
                        <span>{mineStore.timer + "c"}</span>
                    </div>
                </div>
                <div>
                    <button onClick={() => mineStore.restart()}>restart</button>
                </div>
            </section>

            <section className={"mine-loose"} style = {{display : mineStore.end ? "flex" : "none"}}>
                <h3>Вы проиграли!</h3>
                <button onClick={() => mineStore.restart()}>Заново</button>
            </section>
            <section className={"mine-loose"} style = {{display : mineStore.win ? "flex" : "none"}}>
                <h3>Вы выиграли!</h3>
                <button onClick={() => mineStore.restart()}>Заново</button>
            </section>


            <table className={"mine-field"} onContextMenu={(e) => e.preventDefault()}>
                {newField}
            </table>

            <section className={"mine-rules"} style={{margin: "auto", marginBottom: "40px", minWidth: "500px"}}>
                <h3>Как играть</h3>
                <p>
                    В сапере очень простые правила.
                    Игровое поле разделено на клетки, некоторые из которых заминированы.
                    Для победы вам нужно открыть все клетки, не попадая на мины.
                    В открытых клетках отображаются цифры, каждая цифра — это количество мин в соседних клетках.
                    С помощью этой информации можно определить в каких клетках содержатся мины.
                    Предполагаемую клетку с миной можно пометить флажком с помощью правой кнопки мыши.
                </p>
            </section>
        </>


    )
})
