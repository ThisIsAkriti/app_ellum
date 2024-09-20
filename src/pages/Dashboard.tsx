
import Header from "../components/Header"
import "../styles/app.scss";
import Sidebar from "../components/Sidebar";
import DashboardBody from "../components/DashboardBody";
import useDocumentTitle from "../utils/hooks/useDocumentTitle";

const Body = () => {
  useDocumentTitle('Dashboard - HTMS admin tempelate')
  return (
    <div className="page_wrapper">
      <Header/>
      <div className="page_body">
        <Sidebar/>
        <DashboardBody/>
      </div>
    </div>
  )
}

export default Body;