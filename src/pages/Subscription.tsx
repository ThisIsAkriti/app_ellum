import Body from "./Dashboard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"

const subscription = () => {
    return(
        <div className="page_wrapper">
        <Header/>
        <div className="page_body">
          <Sidebar/>
          <Body/>
        </div>
      </div>
    )
}
export default subscription;