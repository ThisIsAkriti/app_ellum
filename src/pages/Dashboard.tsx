import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const Dashboard = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  return (
    <div className={` ${isMenuOpen? "Contract" : "Expand"}`}>
      div
    </div>
  )
}

export default Dashboard;
