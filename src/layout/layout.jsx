import {Link, Outlet} from "react-router-dom";
import {
    ABOUT_ROUTE,
    HOME_ROUTE,
    Stats_ROUTE,
} from "../utils/consts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faSkype, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";
import {Logo} from "../utils/svg";
import {Menu} from "../components/menu";
import("../styles/layout/layout.css")

const icoStyle = {"width": "30px", "height": "30px"}

export const Layout = () => {
    const [nav, setNav] = useState(false)
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
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
            <Menu nav = {nav} setNav={(val) => setNav(val)} scrollHeight={scrollHeight}/>
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
