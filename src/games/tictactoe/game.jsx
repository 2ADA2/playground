import {useEffect, useState} from "react";
import "./styles/game.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faO, faX} from "@fortawesome/free-solid-svg-icons";
import {EndModal} from "./endModal";

function calculateWinner(squares) {
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

export const TicTacToe = () => {
    const [winner, setWinner] = useState(null)
    const [area, setArea] = useState((localStorage.getItem("TicTacToe")) ?
        JSON.parse(localStorage.getItem("TicTacToe"))
        : ["","","","","","","","",""]);
    const [field, setField] = useState([])
    const [move, setMove] = useState("X")

    function newField(area){
        let field = []
        for(let i of area){
            if(!i){
                field.push("")
            } else if(i === "X"){
                field.push(<FontAwesomeIcon icon={faX}/>)
            } else{
                field.push(<FontAwesomeIcon icon={faO}/>)
            }
        }
        setField(field)
    }

    useEffect(() => {
        newField(area)
        setWinner(calculateWinner(area))
        if(!(area.filter(a => !a).length % 2)) setMove("O")

    }, []);

    function restart(){
        setField(["","","","","","","","",""])
        setArea(["","","","","","","","",""])
        localStorage.setItem("TicTacToe","")
        setWinner("")
        setMove("X")
    }

    function updateField(val){
        if(area[val] || winner) return
        let oldField = area.slice()
        if(move === "X"){
            setMove("O")
            oldField.splice(val,1,"X")
            setArea(oldField)
        } else{
            setMove("X");
            oldField.splice(val,1,"O")
            setArea(oldField)
        }
        localStorage.setItem("TicTacToe", JSON.stringify(oldField))
        calculateWinner(area)
        newField(oldField)
        const win = calculateWinner(oldField)
        setWinner(win)
        if(!win && !oldField.includes("")) setWinner("nobody")

    }

    return (
        <div className="tic-tac-toe">
            <section className="tic-tac-toe-header">
                <div>
                    <h1>Tic Tac Toe</h1>
                    <h2>Крестики-нолики</h2>
                </div>
            </section>
            <section>
                <h3>Сейчас ходят: {move}</h3>
            </section>1
            {(winner)? <EndModal winner={winner} restart={() => restart()}/> : <></>}
            <section className="tic-tac-toe-game">
                <table>
                    <tr>
                        <td className={((area[0]) ? "clicked": "")} onClick={() => updateField(0)}>{field[0]}</td>
                        <td className={((area[1]) ? "clicked": "")} onClick={() => updateField(1)}>{field[1]}</td>
                        <td className={((area[2]) ? "clicked": "")} onClick={() => updateField(2)}>{field[2]}</td>
                    </tr>
                    <tr>
                        <td className={((area[3]) ? "clicked": "")} onClick={() => updateField(3)}>{field[3]}</td>
                        <td className={((area[4]) ? "clicked": "")} onClick={() => updateField(4)}>{field[4]}</td>
                        <td className={((area[5]) ? "clicked": "")} onClick={() => updateField(5)}>{field[5]}</td>
                    </tr>
                    <tr>
                        <td className={((area[6]) ? "clicked": "")} onClick={() => updateField(6)}>{field[6]}</td>
                        <td className={((area[7]) ? "clicked": "")} onClick={() => updateField(7)}>{field[7]}</td>
                        <td className={((area[8]) ? "clicked": "")} onClick={() => updateField(8)}>{field[8]}</td>
                    </tr>
                </table>
            </section>
        </div>
    )
}