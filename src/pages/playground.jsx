import "../styles/pages/playgound.css"
import {useState} from "react";
import {Logo} from "../utils/svg";
import {Link} from "react-router-dom";
export const Playground = () => {

    const [game, setGame] = useState(1)

    return (
        <div className="playground">
            <section className="playground-logo-header">
                <Link to="/">
                    <Logo/>
                </Link>
                <div className="playground-back-container">
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                    <div className={"logo-block"}></div>
                </div>

            </section>
            <h2>Выберите игру, в которую хотите поиграть</h2>
            <section>
                <button onClick={() => setGame(1)}>
                    2048
                </button>
                <button onClick={() => setGame(2)}>
                    Tic Tac Toe
                </button>
                <button onClick={() => setGame(3)}>
                    The snake
                </button>
                <button onClick={() => setGame(4)}>
                    keyboard trainer
                </button>
            </section>
            <section>
                <div className={(game === 1) ? "game-preview" : "game-preview game-preview-opened"}>
                    <h3>2048</h3>
                    <p>
                        2048 - "залипательная" игра-головоломка, в которой игрок соединяет плитки с одинаковыми числами,
                        стремясь создать плитку с числом 2048. Простые правила, но глубокая стратегия делают эту игру
                        захватывающей и увлекательной для всех, кто любит вызов умственных способностей.
                    </p>
                </div>
                <div className={(game === 2) ? "game-preview" : "game-preview game-preview-opened"}>
                    <h3>Tic Tac Toe</h3>
                    <p>
                        Крестики-нолики - классическая игра, где два игрока поочередно ставят крестики и нолики на игровом поле 3x3.
                        Цель - выстроить три своих символа в ряд по горизонтали, вертикали или диагонали. Простые правила и стратегические
                        возможности делают ее идеальной для быстрой и увлекательной игры как для детей, так и для взрослых.
                    </p>
                </div>
                <div className={(game === 3) ? "game-preview" : "game-preview game-preview-opened"}>
                    <h3>Snake</h3>
                    <p>
                        "Змейка" - классическая аркадная игра, где игрок управляет змейкой, которая постепенно растет
                        при поедании еды, но при этом не должна столкнуться с собственным хвостом или стенами.
                        Цель игры - набрать как можно больше очков, управляя змейкой через увеличивающееся пространство.
                        Простые правила и возможность соревноваться за рекорды делают эту игру вечным хитом.
                    </p>
                </div>
                <div className={(game === 4) ? "game-preview" : "game-preview game-preview-opened"}>
                    <h3>Keyboard trainer</h3>
                    <p>
                        удобный инструмент для оценки и улучшения вашей скорости набора текста. предоставляет различные
                        упражнения и тесты, позволяющие определить вашу скорость печати в знаках в минуту (ЗПМ) или словах
                        в минуту (СПМ). После завершения программа выдает статистику, отражающую вашу точность
                        и скорость печати, что помогает отслеживать прогресс и идентифицировать области для улучшения.
                    </p>
                </div>
            </section>
        </div>
    )
}
