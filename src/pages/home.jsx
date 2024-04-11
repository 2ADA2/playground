import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhabricator, faReact, faWikipediaW} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";
import {Link} from "react-router-dom";
import {faGamepad, faGhost, faNewspaper, faRodSnake} from "@fortawesome/free-solid-svg-icons";

import("../styles/pages/home.css")
export const Home = () => {
    const [header, setHeader] = useState(false)
    const [detailed, setDetailed] = useState(false)

    return (<section className="home">
        <section
            className={(!detailed) ? "home-header-container" : "home-header-container home-header-container-bigger"}>
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
                    <h2>Сборник проектов</h2>
                    <p className="p-opacity">Место для развлечений и отдыха</p>
                </section>
                <section className={(!header) ? "home-about" : "home-about home-about-left"}>
                    <div>
                        <h2>О проекте</h2>
                        <p>Проект PLAYROUND представляет собой web-приложение, которое включает в себя все мои
                            предыдущие
                            проекты, а именно игры.</p>
                        <p>Дата начала разработки: 06.05.2024</p>
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
                                    <li>HTML/CSS</li>
                                    <li>JS/JSX</li>
                                    <li>React</li>
                                    <li>React router DOM</li>
                                    <li>Паттерны проектирования</li>
                                    <li>React Chart JS 2</li>
                                    <li>менеджер состояния MobX</li>
                                    <li>WebStorm (среда разработки)</li>
                                    <li>прочее</li>
                                </ul>
                            </p>

                        </div>
                    </div>
                </section>
            </section>
        </section>


        <main className="home-main">

            <div className="home-panel-container">
                <nav className="home-panel">
                    <button>
                        Мотивация
                    </button>
                    <button>
                        Популярность
                    </button>
                    <button>
                        Важность
                    </button>
                    <button>
                        Для всех
                    </button>
                </nav>
            </div>

            <section className="motivation">
                <div className="text-section">
                    <h3>Мотивация</h3>
                    <p>Игры на подобие "змейка" или "2048" называются Гипер-казуалки. В них достаточно интересно играть,
                        и они просты в разработке по
                        сравнению с другими типами игр.</p>
                    <p>Так же разработка подобных проектов достаточно интересна и для самого разработчика. Но для
                        создания даже таких простых игр всё же нужно иметь достаточно знаний и мотивации, но реультат
                        того стоит.</p>
                </div>
                <div className="card-section">
                    <a className="card"
                       target="_blank"
                       href="https://ru.wikipedia.org/wiki/%D0%93%D0%B8%D0%BF%D0%B5%D1%80%D0%BA%D0%B0%D0%B7%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B8%D0%B3%D1%80%D0%B0#:~:text=%D0%93%D0%B8%D0%BF%D0%B5%D1%80%D0%BA%D0%B0%D0%B7%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B8%D0%B3%D1%80%D0%B0%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%B8%D0%B3%D1%80%D0%B0,%D0%B8%D0%BB%D0%B8%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%B0.">
                        <FontAwesomeIcon icon={faWikipediaW}/>
                        <span>подробнее на Wiki</span>
                    </a>
                    <a className="card"
                       target="_blank"
                       href="https://habr.com/ru/articles/455624/">
                        <FontAwesomeIcon icon={faNewspaper}/>
                        <span>подробнее на Habr</span>
                    </a>
                </div>
            </section>

            <section className="popular">
                <h3>Популярность</h3>
                <p>Одним из ключевых факторов популярности таких игр является их простота и легкость в освоении.
                    Все они имеют интуитивно понятный геймплей и минималистичный дизайн, что делает их
                    доступными даже для тех, кто никогда раньше не играл в компьютерные игры.
                    Благодаря этой простоте, игры становятся привлекательными для широкой аудитории,
                    в том числе для тех, кто не имеет много времени на игры.
                </p>

                <section className="card-section popular-cards">
                    <a className=" card popular-card"
                       href="https://www.iguides.ru/main/gadgets/pochemu_igra_zmeyka_takaya_populyarnaya_eksperty_rasskazali_/"
                       target="_blank">
                        <FontAwesomeIcon icon={faRodSnake}/>
                        <span>Популярность игры "змейка"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://habr.com/ru/articles/81469/"
                       target="_blank">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Популярность игры "Tetris"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://stopgame.ru/blogs/topic/106387/pac_man_vse_chto_vy_hoteli_znat_o_nem"
                       target="_blank">
                        <FontAwesomeIcon icon={faGhost}/>
                        <span>Популярность игры "PacMan"</span>
                    </a>
                </section>
            </section>
            <section className="popular">
                <h3>Популярность</h3>
                <p>Одним из ключевых факторов популярности таких игр является их простота и легкость в освоении.
                    Все они имеют интуитивно понятный геймплей и минималистичный дизайн, что делает их
                    доступными даже для тех, кто никогда раньше не играл в компьютерные игры.
                    Благодаря этой простоте, игры становятся привлекательными для широкой аудитории,
                    в том числе для тех, кто не имеет много времени на игры.
                </p>

                <section className="card-section popular-cards">
                    <a className=" card popular-card"
                       href="https://www.iguides.ru/main/gadgets/pochemu_igra_zmeyka_takaya_populyarnaya_eksperty_rasskazali_/"
                       target="_blank">
                        <FontAwesomeIcon icon={faRodSnake}/>
                        <span>Популярность игры "змейка"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://habr.com/ru/articles/81469/"
                       target="_blank">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Популярность игры "Tetris"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://stopgame.ru/blogs/topic/106387/pac_man_vse_chto_vy_hoteli_znat_o_nem"
                       target="_blank">
                        <FontAwesomeIcon icon={faGhost}/>
                        <span>Популярность игры "PacMan"</span>
                    </a>
                </section>
            </section>
            <section className="popular">
                <h3>Популярность</h3>
                <p>Одним из ключевых факторов популярности таких игр является их простота и легкость в освоении.
                    Все они имеют интуитивно понятный геймплей и минималистичный дизайн, что делает их
                    доступными даже для тех, кто никогда раньше не играл в компьютерные игры.
                    Благодаря этой простоте, игры становятся привлекательными для широкой аудитории,
                    в том числе для тех, кто не имеет много времени на игры.
                </p>

                <section className="card-section popular-cards">
                    <a className=" card popular-card"
                       href="https://www.iguides.ru/main/gadgets/pochemu_igra_zmeyka_takaya_populyarnaya_eksperty_rasskazali_/"
                       target="_blank">
                        <FontAwesomeIcon icon={faRodSnake}/>
                        <span>Популярность игры "змейка"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://habr.com/ru/articles/81469/"
                       target="_blank">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Популярность игры "Tetris"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://stopgame.ru/blogs/topic/106387/pac_man_vse_chto_vy_hoteli_znat_o_nem"
                       target="_blank">
                        <FontAwesomeIcon icon={faGhost}/>
                        <span>Популярность игры "PacMan"</span>
                    </a>
                </section>
            </section>
            <section className="popular">
                <h3>Популярность</h3>
                <p>Одним из ключевых факторов популярности таких игр является их простота и легкость в освоении.
                    Все они имеют интуитивно понятный геймплей и минималистичный дизайн, что делает их
                    доступными даже для тех, кто никогда раньше не играл в компьютерные игры.
                    Благодаря этой простоте, игры становятся привлекательными для широкой аудитории,
                    в том числе для тех, кто не имеет много времени на игры.
                </p>

                <section className="card-section popular-cards">
                    <a className=" card popular-card"
                       href="https://www.iguides.ru/main/gadgets/pochemu_igra_zmeyka_takaya_populyarnaya_eksperty_rasskazali_/"
                       target="_blank">
                        <FontAwesomeIcon icon={faRodSnake}/>
                        <span>Популярность игры "змейка"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://habr.com/ru/articles/81469/"
                       target="_blank">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Популярность игры "Tetris"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://stopgame.ru/blogs/topic/106387/pac_man_vse_chto_vy_hoteli_znat_o_nem"
                       target="_blank">
                        <FontAwesomeIcon icon={faGhost}/>
                        <span>Популярность игры "PacMan"</span>
                    </a>
                </section>
            </section>
            <section className="popular">
                <h3>Популярность</h3>
                <p>Одним из ключевых факторов популярности таких игр является их простота и легкость в освоении.
                    Все они имеют интуитивно понятный геймплей и минималистичный дизайн, что делает их
                    доступными даже для тех, кто никогда раньше не играл в компьютерные игры.
                    Благодаря этой простоте, игры становятся привлекательными для широкой аудитории,
                    в том числе для тех, кто не имеет много времени на игры.
                </p>

                <section className="card-section popular-cards">
                    <a className=" card popular-card"
                       href="https://www.iguides.ru/main/gadgets/pochemu_igra_zmeyka_takaya_populyarnaya_eksperty_rasskazali_/"
                       target="_blank">
                        <FontAwesomeIcon icon={faRodSnake}/>
                        <span>Популярность игры "змейка"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://habr.com/ru/articles/81469/"
                       target="_blank">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Популярность игры "Tetris"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://stopgame.ru/blogs/topic/106387/pac_man_vse_chto_vy_hoteli_znat_o_nem"
                       target="_blank">
                        <FontAwesomeIcon icon={faGhost}/>
                        <span>Популярность игры "PacMan"</span>
                    </a>
                </section>
            </section>
            <section className="popular">
                <h3>Популярность</h3>
                <p>Одним из ключевых факторов популярности таких игр является их простота и легкость в освоении.
                    Все они имеют интуитивно понятный геймплей и минималистичный дизайн, что делает их
                    доступными даже для тех, кто никогда раньше не играл в компьютерные игры.
                    Благодаря этой простоте, игры становятся привлекательными для широкой аудитории,
                    в том числе для тех, кто не имеет много времени на игры.
                </p>

                <section className="card-section popular-cards">
                    <a className=" card popular-card"
                       href="https://www.iguides.ru/main/gadgets/pochemu_igra_zmeyka_takaya_populyarnaya_eksperty_rasskazali_/"
                       target="_blank">
                        <FontAwesomeIcon icon={faRodSnake}/>
                        <span>Популярность игры "змейка"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://habr.com/ru/articles/81469/"
                       target="_blank">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Популярность игры "Tetris"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://stopgame.ru/blogs/topic/106387/pac_man_vse_chto_vy_hoteli_znat_o_nem"
                       target="_blank">
                        <FontAwesomeIcon icon={faGhost}/>
                        <span>Популярность игры "PacMan"</span>
                    </a>
                </section>
            </section>
            <section className="popular">
                <h3>Популярность</h3>
                <p>Одним из ключевых факторов популярности таких игр является их простота и легкость в освоении.
                    Все они имеют интуитивно понятный геймплей и минималистичный дизайн, что делает их
                    доступными даже для тех, кто никогда раньше не играл в компьютерные игры.
                    Благодаря этой простоте, игры становятся привлекательными для широкой аудитории,
                    в том числе для тех, кто не имеет много времени на игры.
                </p>

                <section className="card-section popular-cards">
                    <a className=" card popular-card"
                       href="https://www.iguides.ru/main/gadgets/pochemu_igra_zmeyka_takaya_populyarnaya_eksperty_rasskazali_/"
                       target="_blank">
                        <FontAwesomeIcon icon={faRodSnake}/>
                        <span>Популярность игры "змейка"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://habr.com/ru/articles/81469/"
                       target="_blank">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Популярность игры "Tetris"</span>
                    </a>
                    <a className=" card popular-card"
                       href="https://stopgame.ru/blogs/topic/106387/pac_man_vse_chto_vy_hoteli_znat_o_nem"
                       target="_blank">
                        <FontAwesomeIcon icon={faGhost}/>
                        <span>Популярность игры "PacMan"</span>
                    </a>
                </section>
            </section>
        </main>

    </section>);
}
