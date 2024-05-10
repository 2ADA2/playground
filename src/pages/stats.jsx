import "../styles/pages/stats.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb, faRodSnake, faStar} from "@fortawesome/free-solid-svg-icons";
export const Stats = () => {
    return (
        <div className="stats">
            <section className={"stats-header"}>
                <div className={"stats-headline"}>
                    <h2>Статистика</h2>
                    <span>Статистика по играм</span>
                </div>
            </section>

            <section className={"mine-rules"} style={{margin: "auto", marginBottom: "40px", minWidth: "500px"}}>
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
                <p style={{marginTop:"40px"}}>
                    Посмотрите свои рекорды, сколько вы наиграли и чего достигли.
                </p>
            </section>

            <section className={"stats-main"}>
                <div className={"ttfe-stats stats-block"}>
                    <div className={"ttfe-chart chart"}>
                        chart
                    </div>
                    <div className={"ttfe-chart-info chart-info"}>
                        chart-info
                    </div>
                </div>

                <div className={"ttfe-stats stats-block "}>
                    <div className={"ttfe-chart chart"}>

                    </div>
                    <div className={"ttfe-chart-info chart-info"}>

                    </div>
                </div>

                <div className={"ttfe-stats stats-block "}>
                    <div className={"ttfe-chart chart"}>

                    </div>
                    <div className={"ttfe-chart-info chart-info"}>

                    </div>
                </div>
            </section>
        </div>
    )
}
