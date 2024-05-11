import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./functions/routes";
import {Layout} from "./layout/layout";
import {useEffect} from "react";
import Global from "./store/global";
import {clear} from "@testing-library/user-event/dist/clear";

function App() {
    useEffect(() => {
        const interval = setInterval(() => {
            Global.setTotalTime()
        }, 1000)
        return () => clearInterval(interval)
    }, []);
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    {routes.map(({path, Element}) => {
                        return <Route key={path} path={path} element={<Element/>}/>
                    })}
                    <Route
                        path="*"
                        element={<Navigate to="/" replace/>}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
