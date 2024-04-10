import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";

import("../styles/pages/home.css")
export const Home = () => {
    const [header, setHeader] = useState(false)
    const [detailed, setDetailed] = useState(false)

    return (<section className="home">
        <div className="home-panel-container">
            <div className={(!header) ? "home-panel" : "home-panel project-info"}>
                <button onClick={() => setHeader(false)}>Главная</button>
                <button onClick={() => setHeader(true)}>О проекте</button>
            </div>
        </div>

        <section className="home-header">
            <FontAwesomeIcon icon={faReact} className={(!header) ? "logo" : "logo logo-right"}/>

            <section className={(!header) ? "home-main" : "home-main home-main-right"}>
                <div>
                    <h2>ADA's</h2>
                    <h2>PLAYGROUND</h2>
                </div>
                <h2>Игры, о которых знает каждый.</h2>
            </section>
            <section className={(!header) ? "home-about" : "home-about home-about-left"}>
                <div>
                    <h2>О проекте</h2>
                    <p>Проект PLAYROUND представляет собой web-приложение, которое включает в себя все мои предыдущие
                        проекты, а именно игры.</p>
                    <p>Дата начала разработки: 10.04.2024</p>
                    <p>Разработчик: Дубровский Артём (ГГОЛ)</p>
                    <p>Содействовали: Потапченко Арсений (ГГОЛ), MR.PEN (пасхалко)</p>
                    <button onClick={() => setDetailed(!detailed)}>ещё подробности</button>
                    <div className={(detailed) ? "detailed" : "detailed hidden-detailed"}>
                        <p>
                            <FontAwesomeIcon icon={faReact}/>
                            Разработано для Национального детского технопарка
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faReact}/>
                            применены технологии:
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS/JSX</li>
                                <li>React</li>
                                <li>React router DOM</li>
                                <li>Паттерны проектирования</li>
                                <li>React Chart JS 2</li>
                                <li>MobX</li>
                                <li>WebStorm (среда разработки)</li>
                                <li>прочее</li>
                            </ul>
                        </p>

                    </div>
                </div>
            </section>


        </section>
    </section>);
}
