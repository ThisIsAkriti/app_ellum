import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const Dashboard = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  return (
    <div className={`dashboard_wrapper ${isMenuOpen? "Contract" : "Expand"}`}>
      
    </div>
  )
}

export default Dashboard;
