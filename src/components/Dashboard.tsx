import Header from "./Header"
import "../styles/app.scss";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Dashboard = () => {
  return (
    <div className="dashboard_wrapper">
      <Header/>
      <div className="dashbord_body">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Dashboard
