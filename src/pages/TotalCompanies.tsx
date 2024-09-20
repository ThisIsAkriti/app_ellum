import Header from "../components/Header";
import TotalCompanyBody from "../components/TotalCompanyBody";
import Sidebar from "../components/Sidebar"

const TotalCompanies = () => {
  return (
    <div className="page_wrapper">
      <Header/>
      <div className="page_body">
        <Sidebar/>
        <TotalCompanyBody/>
      </div>
    </div>
  )
}

export default TotalCompanies
