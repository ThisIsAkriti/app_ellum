import AuthBody from "../components/AuthBody";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"

const authentication = () => {
    return(
        <div className="page_wrapper">
        <Header/>
        <div className="page_body">
          <Sidebar/>
          <AuthBody/>
        </div>
      </div>
    )
}
export default authentication;