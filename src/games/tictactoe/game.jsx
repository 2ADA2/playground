import {useEffect, useState} from "react";
import "./styles/game.css"
import "./styles/animation.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faClock, faCross, faFlag, faHistory, faO, faSearch, faX} from "@fortawesome/free-solid-svg-icons";
import tttStore from "./store";
import {EndModal} from "./endModal";
import {BlockLink} from "../../components/link";
import {faYandex} from "@fortawesome/free-brands-svg-icons";
import {observer} from "mobx-react-lite";

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export const TicTacToe = observer( () => {
    const [winner, setWinner] = useState(null)
    const [area, setArea] = useState((localStorage.getItem("TicTacToe")) ?
        JSON.parse(localStorage.getItem("TicTacToe"))
        : ["", "", "", "", "", "", "", "", ""]);
    const [field, setField] = useState([])
    const [move, setMove] = useState("X")

    function newField(area) {
        let field = []
        for (let i of area) {
            if (!i) {
                field.push("")
            } else if (i === "X") {
                field.push(<FontAwesomeIcon icon={faX}/>)
            } else {
                field.push(<FontAwesomeIcon icon={faO}/>)
            }
        }
        setField(field)
    }

    useEffect(() => {
        newField(area)
        setWinner(calculateWinner(area))
        if (!(area.filter(a => !a).length % 2)) setMove("O")

    }, []);

    function restart() {
        setField(["", "", "", "", "", "", "", "", ""])
        setArea(["", "", "", "", "", "", "", "", ""])
        localStorage.setItem("TicTacToe", "")
        setWinner("")
        setMove("X")
    }

    function updateField(val) {
        if (area[val] || winner) return
        let oldField = area.slice()
        if (move === "X") {
            setMove("O")
            oldField.splice(val, 1, "X")
            setArea(oldField)
        } else {
            setMove("X");
            oldField.splice(val, 1, "O")
            setArea(oldField)
        }
        localStorage.setItem("TicTacToe", JSON.stringify(oldField))
        calculateWinner(area)
        newField(oldField)
        const win = calculateWinner(oldField)
        if(win === "X") {
            tttStore.setX()
        } else if (win === "O") {
            tttStore.setO()
        }
        setWinner(win)
        if (!win && !oldField.includes("")) setWinner("nobody")

    }

    return (
        <div className="tic-tac-toe">
            <section className="tic-tac-toe-header">
                <div className={"ttt-background"}>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                    <div className={"ttt-elem"}></div>
                </div>
                <div className={"ttt-header"}>
                    <h2>Tic Tac Toe</h2>
                    <span>Крестики-нолики</span>
                </div>
            </section>

            <section className={"mine-rules"} style={{margin:"auto", minWidth:"700px"}}>
                <h3>История</h3>
                <p>
                    Многие думают, что Крестики-Нолики - это простая игра. Но если углубиться в ее историю,
                    можно узнать много интересного. Исследование происхождения этой игры показывает её особое
                    место в мире игр.
                </p>
                <div className={"ttt-links"} style={{display:"flex", gap:"20px"}}>
                    <BlockLink
                    link={"https://tictactoefree.com/ru/statji/istoriya-i-proishozhdenie-igry-krestiki-noliki#:~:text=%D0%94%D1%80%D0%B5%D0%B2%D0%BD%D0%B8%D0%B9%20%D0%95%D0%B3%D0%B8%D0%BF%D0%B5%D1%82,%D0%9D%D0%BE%D0%BB%D0%B8%D0%BA%D0%B8%2C%20%D0%BF%D1%80%D0%B8%D0%B4%D1%83%D0%BC%D0%B0%D0%B2%20%D0%B5%D1%91%20%D0%BF%D0%B5%D1%80%D0%B2%D1%83%D1%8E%20%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8E."}
                    text={"Узнайте историю игры крестики-нолики"}
                    header={"История"}
                    elem={<FontAwesomeIcon icon={faHistory}/>}
                    />
                    <BlockLink
                        link={"https://yandex.ru/games/app/98511"}
                        text={"Можете попробовать несоклько режимов"}
                        header={"Игра от Яндекса"}
                        elem={<FontAwesomeIcon icon={faYandex}/>}
                    />
                </div>

            </section>

            <section className={"mine-info-panel"} style={{width:"700px"}}>
                <div>
                    <h3 style={{fontSize: "24px", fontWeight: "400"}}>Сейчас ходят: {move}</h3>
                </div>
                <div style={{display: "flex", gap: "40px", fontSize: "24px"}}>
                    <div>
                        <FontAwesomeIcon icon={faX}/> : {tttStore.x || 0}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faO}/> : {tttStore.o || 0}
                    </div>
                </div>
            </section>


            {(winner) ? <EndModal winner={winner} restart={() => restart()}/> : <></>}
            <section className="tic-tac-toe-game">
                <table>
                    <tr>
                        <td className={((area[0]) ? "clicked" : "")} onClick={() => updateField(0)}>{field[0]}</td>
                        <td className={((area[1]) ? "clicked" : "")} onClick={() => updateField(1)}>{field[1]}</td>
                        <td className={((area[2]) ? "clicked" : "")} onClick={() => updateField(2)}>{field[2]}</td>
                    </tr>
                    <tr>
                        <td className={((area[3]) ? "clicked" : "")} onClick={() => updateField(3)}>{field[3]}</td>
                        <td className={((area[4]) ? "clicked" : "")} onClick={() => updateField(4)}>{field[4]}</td>
                        <td className={((area[5]) ? "clicked" : "")} onClick={() => updateField(5)}>{field[5]}</td>
                    </tr>
                    <tr>
                        <td className={((area[6]) ? "clicked" : "")} onClick={() => updateField(6)}>{field[6]}</td>
                        <td className={((area[7]) ? "clicked" : "")} onClick={() => updateField(7)}>{field[7]}</td>
                        <td className={((area[8]) ? "clicked" : "")} onClick={() => updateField(8)}>{field[8]}</td>
                    </tr>
                </table>
            </section>
            <section className={"mine-rules snake-rules"}>
                <h3>Как играть</h3>
                <p>Вы и так знаете правила классических крестиков-ноликов)</p>
                <p>тот кто первый соберет ряд или диагональ тот выиграл.</p>
            </section>
        </div>
    )
})
