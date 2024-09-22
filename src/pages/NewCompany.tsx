import Header from "../components/Header";
import NewCompanyBody from "../components/NewCompanyBody";
import Sidebar from "../components/Sidebar"

const NewCompany = () => {
    return (
        <div className="page_wrapper">
          <Header/>
          <div className="page_body">
            <Sidebar/>
            <NewCompanyBody/>
          </div>
        </div>
      )
}

export default NewCompany
