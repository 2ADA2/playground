import "../styles/pages/playgound.css"
import {useState} from "react";
import {Logo} from "../utils/svg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb, faKeyboard, faO, faRodSnake, faStaffSnake, faX} from "@fortawesome/free-solid-svg-icons";
import {MINESWEEPER_ROUTE, THESNAKE_ROUTE, TICTACTOE_ROUTE, TTFE_ROUTE} from "../utils/consts";

export const Playground = () => {

    const [game, setGame] = useState(1)

    return (
        <div className="playground">
            <section className="playground-logo-header">
                <Link to="/">
                    <Logo/>
                </Link>

                <div className="playground-back-container">
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                    <div className={"game-header-block"}></div>
                </div>

                <h2>Playground</h2>
                <h3>Выберите игру, в которую хотите поиграть</h3>
            </section>

            <section className="game-buttons">
                <button onClick={() => setGame(1)} className={(game === 1) ? "active" : ""}>
                    2048
                </button>
                <button onClick={() => setGame(2)} className={(game === 2) ? "active" : ""}>
                    крестики-нолики
                </button>
                <button onClick={() => setGame(3)} className={(game === 3) ? "active" : ""}>
                    змейка
                </button>
                <button onClick={() => setGame(4)} className={(game === 4) ? "active" : ""}>
                    сапёр
                </button>
            </section>

            <section className="games-container">

                <div className={(game === 1) ? "game-preview game-preview-opened" : "game-preview"}>
                    <div className="game-preview-header">
                        <div className="card">
                            2048
                        </div>
                        <div className="game-preview-header-container">
                            <h3>2048</h3>
                            <span>Простая игра, но это так кажется</span>
                        </div>

                    </div>
                    <p>
                        2048 - "залипательная" игра-головоломка, в которой игрок соединяет плитки с одинаковыми числами,
                        стремясь создать плитку с числом 2048. Простые правила, но глубокая стратегия делают эту игру
                        захватывающей и увлекательной для всех, кто любит вызов умственных способностей.
                        На самом деле совсем не просто собрать даже плитку 1024, но есть множество стратегий облегчающих
                        прохождение этой игры. Хотя игра и называется 2048, но фактического предела в ней нет.
                    </p>
                    <Link to={TTFE_ROUTE} onClick={() => window.scrollTo(0,0)}><button>Играть</button></Link>
                </div>

                <div className={(game === 2) ? "game-preview game-preview-opened" : "game-preview"}>
                    <div className="game-preview-header">
                        <div className="card">
                            <FontAwesomeIcon icon={faO}/><FontAwesomeIcon icon={faX}/>
                        </div>
                        <div className="game-preview-header-container">
                            <h3> Tic Tac Toe</h3>
                            <span>Классические крестики-нолики</span>
                        </div>
                    </div>

                    <p>
                        Крестики-нолики - классическая игра, где два игрока поочередно ставят крестики и нолики на
                        игровом поле 3x3.
                        Цель - выстроить три своих символа в ряд по горизонтали, вертикали или диагонали. Простые
                        правила и стратегические
                        возможности делают ее идеальной для быстрой и увлекательной игры как для детей, так и для
                        взрослых.
                    </p>
                    <Link to={TICTACTOE_ROUTE} onClick={() => window.scrollTo(0,0)}><button>Играть</button></Link>
                </div>

                <div className={(game === 3) ? "game-preview game-preview-opened" : "game-preview"}>
                    <div className="game-preview-header">
                        <div className="card">
                            <FontAwesomeIcon icon={faRodSnake}/>
                        </div>
                        <div className="game-preview-header-container">
                            <h3>Snake</h3>
                            <span>Змейка - игра, которую знает каждый</span>
                        </div>
                    </div>

                    <p>
                        "Змейка" - классическая аркадная игра, где игрок управляет змейкой, которая постепенно растет
                        при поедании еды, но при этом не должна столкнуться с собственным хвостом или стенами.
                        Цель игры - набрать как можно больше очков, управляя змейкой через увеличивающееся пространство.
                        Простые правила и возможность соревноваться за рекорды делают эту игру вечным хитом.
                    </p>
                    <Link to={THESNAKE_ROUTE} onClick={() => window.scrollTo(0,0)}>
                        <button>Играть</button>
                    </Link>
                </div>

                <div className={(game === 4) ? "game-preview game-preview-opened" : "game-preview"}>
                    <div className="game-preview-header">
                        <div className="card">
                            <FontAwesomeIcon icon={faBomb}/>
                        </div>
                        <div className="game-preview-header-container">
                            <h3>Minesweeper</h3>
                            <span>Знаменитый сапер от Windows</span>
                        </div>
                    </div>

                    <p>
                        Плоское или объёмное игровое поле разделено на смежные ячейки,
                        некоторые из которых «заминированы»; количество «заминированных» ячеек неизвестно.
                        Целью игры является открытие всех ячеек, не содержащих мины.
                        При некоторых расстановках мин вычислить их расположение невозможно,
                        и игрок оказывается перед необходимостью открывать ячейки наугад.
                        Сапёр для Windows имеет интерактивное поле, если все возможные комбинации
                        на поле уже открыты, то игрок НЕ взорвется, ткнув наугад. Некоторые реализации
                        (например, «Mines» в наборе головоломок VS games) не создают расположений, требующих угадывания.
                        <p>В данной версии игры есть вероятность того, что игроку придётся угадывать</p>
                    </p>
                    <Link to={MINESWEEPER_ROUTE} onClick={() => window.scrollTo(0,0)}>
                        <button>Играть</button>
                    </Link>
                </div>

            </section>
        </div>
    )
}
