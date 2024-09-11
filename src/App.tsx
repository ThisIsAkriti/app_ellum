import { Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import Authentication from "./pages/Authentication";
import Error from "./pages/Error";
import Subscription from "./pages/Subscription";
import Profile from "../src/pages/Profile";
import Body from "./components/Body";
function App() {
 

  return( 
    <div className="wrapper_container">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/Dashboard" element={<Body/>}/>
        <Route path="/admin/authentication" element={<Authentication/>}/>
        <Route path="/admin/profile" element={<Profile/>}/>
        <Route path="/admin/error" element={<Error/>}/>
        <Route path="/admin/subscription" element={<Subscription/>}/>
      </Routes>
      </Provider>
    </div>
  )
}

export default App
