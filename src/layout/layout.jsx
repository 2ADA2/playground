import {Link, Outlet} from "react-router-dom";
import {HOME} from "../utils/consts";
import("../styles/layout/layout.css")
export const Layout = () => {
    //внешний вид
    return(
        <>
            <header>
                <div className="logo">
                    <Link to={HOME}>
                        <img src="./PGLogo.jpg"/>
                    </Link>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
