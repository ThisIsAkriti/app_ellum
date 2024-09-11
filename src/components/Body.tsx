
import Header from "./Header"
import "../styles/app.scss";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";

const Body = () => {
  return (
    <div className="dashboard_wrapper">
      <Header/>
      <div className="dashbord_body">
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Body;