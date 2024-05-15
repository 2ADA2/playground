import "../styles/pages/stats.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb, faRodSnake, faStar} from "@fortawesome/free-solid-svg-icons";
import {LineChart} from "../components/chart";
import Global from "../store/global";
import {observer} from "mobx-react-lite";
import {convertTime} from "../functions/convertTime";
import store from "../games/TTFE/store/store";
import snakeStore from "../games/thesnake/snakeStore";
import mineStore from "../games/Minesweeper/mineStore";
import {getAverage} from "../functions/getAverage";
export const Stats = observer(() => {
    return (
        <div className="stats">
            <section className={"stats-header"}>
                <section className={"stats-background"}>
                    <div style={{zIndex:"-100", position:"relative"}}>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                        <div className={"stats-header-block"}></div>
                    </div>

                </section>
                <div className={"stats-headline"}>
                    <h2>Статистика</h2>
                    <span>Статистика по играм</span>
                </div>
            </section>

            <section className={"mine-rules stats-mine-rules"}
                     style={{margin: "auto", marginBottom: "40px", minWidth: "500px"}}>
                <h3>Статистика</h3>
                <p>
                    На этой странице вы можете узнать свою статистику по играм,
                    некоторые люди могут играть часами.
                    Тут представлена статистика по такии играм, как:
                </p>
                <ul>
                    <li><FontAwesomeIcon icon={faStar}/> 2048</li>
                    <li><FontAwesomeIcon icon={faBomb}/> Сапер</li>
                    <li><FontAwesomeIcon icon={faRodSnake}/> Змейка</li>
                </ul>
                <p style={{marginTop: "40px"}}>
                    Посмотрите свои рекорды, сколько вы наиграли и чего достигли.
                </p>
            </section>
            <div className={"total-time"}>
                <h3>Общее время проведённое в приложении:</h3>
                <span>{convertTime(Global.totalTime)}</span>
            </div>

            <section className={"stats-main"}>
                <section>
                    <div className={"mine-rules stats-mine-rules"}>
                        <h3>2048</h3>
                    </div>
                    <div className={"ttfe-stats stats-block"}>

                        <div className={"ttfe-chart chart"}>
                            <LineChart data={Global.ttfeRecords}/>
                        </div>
                        <div className={"ttfe-chart-info chart-info"}>
                            <h4>Информация по 2048</h4>
                            <div>
                                <span>Общее время игры: </span>
                                <span>{convertTime(store.time)}</span>
                            </div>
                            <div>
                                <span>Лучший результат: </span>
                                <span>{Global.ttfeRecords.slice().sort((a, b) => a - b).at(-1) || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Самый низкий результат: </span>
                                <span>{Global.ttfeRecords.slice().sort((a, b) => a - b)[0] || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Средний результат (среднее арифметическое): </span>
                                <span>{getAverage(Global.ttfeRecords.slice()) || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Достигнута плитка: </span><span></span>
                            </div>
                            <div className={`number number${store.maxBlock}`}>{store.maxBlock}</div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={"mine-rules stats-mine-rules"}>
                        <h3>Сапер</h3>
                    </div>
                    <div className={"ttfe-stats stats-block"}>

                        <div className={"ttfe-chart chart"}>
                            <LineChart data={Global.mineSweeperRecords} data2 = {Global.mineSweeperRecordsMines}/>
                        </div>
                        <div className={"ttfe-chart-info chart-info"}>
                            <h4>Информация по игре Сапер</h4>
                            <div>
                                <span>Общее время игры: </span>
                                <span>{convertTime(mineStore.time)}</span>
                            </div>
                            <div>
                                <span>Лучший результат по времени: </span>
                                <span>{Global.mineSweeperRecords.slice().sort((a, b) => a - b).at(-1)+ "c" || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Самый низкий результат по времени): </span>
                                <span>{Global.mineSweeperRecords.slice().sort((a, b) => a - b)[0]+ "c" || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Средний результат по времени(среднее арифметическое): </span>
                                <span>{getAverage(Global.mineSweeperRecords.slice()) + "c" || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Лучший результат по разминированию: </span>
                                <span>{Global.mineSweeperRecordsMines.slice().sort((a, b) => a - b).at(-1) || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Самый низкий результат по разминированию): </span>
                                <span>{Global.mineSweeperRecordsMines.slice().sort((a, b) => a - b)[0] || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Средний результат по разминированию(среднее арифметическое): </span>
                                <span>{getAverage(Global.mineSweeperRecordsMines.slice()) || " нет данных"}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={"mine-rules stats-mine-rules"}>
                        <h3>Змейка</h3>
                    </div>
                    <div className={"ttfe-stats stats-block"}>
                        <div className={"ttfe-chart chart"}>
                            <LineChart data={Global.snakeRecords}/>
                        </div>
                        <div className={"ttfe-chart-info chart-info"}>
                            <h4>Информация по игре "Змейка"</h4>
                            <div>
                                <span>Общее время игры:</span>
                                <span>{convertTime(snakeStore.time)}</span>
                            </div>
                            <div>
                                <span>Лучший результат: </span>
                                <span>{Global.snakeRecords.slice().sort((a, b) => a - b).at(-1) || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Самый низкий результат: </span>
                                <span>{Global.snakeRecords.slice().sort((a, b) => a - b)[0] || " нет данных"}</span>
                            </div>
                            <div>
                                <span>Средний результат: </span>
                                <span>{getAverage(Global.snakeRecords.slice()) || " нет данных"}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
})


