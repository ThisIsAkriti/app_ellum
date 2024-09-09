import Body from "../components/Body";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"

const authentication = () => {
    return(
        <div className="dashboard_wrapper">
        <Header/>
        <div className="dashbord_body">
          <Sidebar/>
          <Body/>
        </div>
      </div>
    )
}
export default authentication;