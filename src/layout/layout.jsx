import {Link, Outlet} from "react-router-dom";
import {
    ABOUT_ROUTE,
    HOME_ROUTE,
    KEYBOARD_ROUTE,
    PLAYGROUND_ROUTE,
    Stats_ROUTE,
    THESNAKE_ROUTE, TICTACTOE_ROUTE,
    TTFE_ROUTE
} from "../utils/consts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faSkype, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";
import {Logo} from "../utils/svg";
import("../styles/layout/layout.css")

const icoStyle = {"width": "30px", "height": "30px"}

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

export const Layout = () => {
    const [nav, setNav] = useState(false)
    return(
        <>
            <header>
                <div className="logo">
                    <Link to={HOME_ROUTE} onClick={() => setNav(false)}>
                        <Logo/>
                    </Link>
                </div>
                <nav>
                    <Link onClick={() => setNav(!nav)}>Playground</Link>
                    <Link onClick={() => setNav(false)} to={Stats_ROUTE}>Statistics</Link>
                    <Link onClick={() => setNav(false)} to={ABOUT_ROUTE}>About</Link>
                </nav>

            </header>
            <div
                style={{height : scrollHeight - 75}}
                className={(nav) ? "playground-search-container" : "playground-search-container playground-search-container-hide"}
                onClick={() => setNav(false)}
            >
                <div className={(nav) ? "playground-search" : "playground-search playground-search-hide"}>
                    <section className="beauty">
                        <Link to={TTFE_ROUTE}>
                            <h3>2048</h3>
                            <p>
                                До сих пор очень популярная игра, соберите число 2048! Это не так легко.
                            </p>
                        </Link>
                        <Link to={KEYBOARD_ROUTE}>
                            <h3>Keyboard</h3>
                            <p>
                                Проверьте свою скорость печати, иногда даже просто печатать на скорость может быть
                                интересным.
                            </p>
                        </Link>
                    </section>
                    <section className="search-links">
                        <Link to={PLAYGROUND_ROUTE}>Playground</Link>
                        <Link to={TTFE_ROUTE}>2048</Link>
                        <Link to={THESNAKE_ROUTE}>The snake</Link>
                        <Link to={KEYBOARD_ROUTE}>Keyboard practice</Link>
                        <Link to={TICTACTOE_ROUTE}>tic tac toe</Link>
                    </section>
                </div>
            </div>
            <main>
                <Outlet/>
            </main>

            <footer>
                <p>Проект был создан для Национального детского технопарка Дубровским Артемом</p>
                <div className="links">
                    <h2>Social:</h2>
                    <a href="https://t.me/ARTEMKAddd" target="_blank">
                        <FontAwesomeIcon icon={faTelegram}
                                         style={icoStyle}/>
                        <span>Telegram</span>
                    </a>

                    <a href="https://www.instagram.com/_atem4ik2/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}
                                         style={icoStyle}/>
                        <span>Instagram</span>
                    </a>

                    <a href="https://github.com/2ADA2" target="_blank">
                        <FontAwesomeIcon icon={faGithub}
                                         style={icoStyle}/>
                        <span>GitHub</span>
                    </a>

                    <a href="https://join.skype.com/invite/BUtqFcchNQHd" target="_blank">
                        <FontAwesomeIcon icon={faSkype}
                                         style={icoStyle}/>
                        <span>Skype</span>
                    </a>

                </div>
            </footer>
        </>
    )
}
