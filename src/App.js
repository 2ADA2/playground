import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./functions/routes";
import {Layout} from "./layout/layout";

function App() {
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
