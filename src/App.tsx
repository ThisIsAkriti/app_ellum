import { Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import Dashboard from "./components/Dashboard";
function App() {
 

  return( 
    <div className="wrapper_container">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </Provider>
    </div>
  )
}

export default App
