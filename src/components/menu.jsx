import {Link} from "react-router-dom";
import {MINESWEEPER_ROUTE, PLAYGROUND_ROUTE, THESNAKE_ROUTE, TICTACTOE_ROUTE, TTFE_ROUTE} from "../utils/consts";

export const  Menu = ({nav, setNav = (val) => {}, scrollHeight}) => {
    return (
        <div
            style={{height: scrollHeight - 75 + "px"}}
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
                    <Link to={MINESWEEPER_ROUTE}>
                        <h3>Minesweeper</h3>
                        <p>
                            Каждый знает игру "Сапёр", но кто умеет в нее играть? Надо же просто разминировать поле...
                        </p>
                    </Link>
                </section>
                <section className="search-links">
                    <Link to={PLAYGROUND_ROUTE}>Playground</Link>
                    <Link to={TTFE_ROUTE}>2048</Link>
                    <Link to={THESNAKE_ROUTE}>Змейка</Link>
                    <Link to={MINESWEEPER_ROUTE}>Сапёр</Link>
                    <Link to={TICTACTOE_ROUTE}>крестики-нолики</Link>
                </section>
            </div>
        </div>
    )
}
