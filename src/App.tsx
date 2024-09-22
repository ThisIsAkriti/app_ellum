import { Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import Authentication from "./pages/Authentication";
import Error from "./pages/Error";
import Profile from "../src/pages/Profile";
import Password from "./pages/Password";
import TotalCompanies from "./pages/TotalCompanies";
import Membership from "./pages/Membership";
import NewTickets from "./pages/NewTickets";
import Dashboard from "./pages/Dashboard";
import NewCompany from "./pages/NewCompany";
function App() {
 

  return( 
    <div className="wrapper_container">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/Dashboard" element={<Dashboard/>}/>
        <Route path="/admin/authentication" element={<Authentication/>}/>
        <Route path="/admin/profile" element={<Profile/>}/>
        <Route path="/admin/error" element={<Error/>}/>
        <Route path="/admin/newCompany" element={<NewCompany/>}/>
        <Route path="/admin/password" element={<Password/>}/>
        <Route path="/admin/totalCompanies" element={<TotalCompanies/>}/>
        <Route path="/admin/memberShip" element={<Membership/>}/>
        <Route path="/admin/newTickets" element={<NewTickets/>}/>
      </Routes>
      </Provider>
    </div>
  )
}

export default App
