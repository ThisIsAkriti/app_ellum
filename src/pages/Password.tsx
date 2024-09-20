import Header from "../components/Header"
import PasswordBody from "../components/PasswordBody"
import Sidebar from "../components/Sidebar"

const Password = () => {
  return (
    <div className="page_wrapper">
      <Header/>
      <div className="page_body">
        <Sidebar/>
        <PasswordBody/>
      </div>
    </div>
  )
}

export default Password
