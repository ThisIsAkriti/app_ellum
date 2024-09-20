import Header from "../components/Header";
import ProfileBody from "../components/ProfileBody";
import Sidebar from "../components/Sidebar"

const Membership = () => {
    return(
    <div className="page_wrapper">
      <Header/>
      <div className="page_body">
        <Sidebar/>
        <ProfileBody/>
      </div>
    </div>
  )
}
export default Membership;