import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import useDocumentTitle from "../utils/hooks/useDocumentTitle";
import { BarChart} from "../utils/charts/BarChart";
import { LineChart } from "../utils/charts/LineChart";

const Dashboard = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  useDocumentTitle("Dashboard - HRMS template")
  return (
    <div className={`dashboard_wrapper ${isMenuOpen? "Contract" : "Expand"}`}>
      <div>
        <h1>Welcome Admin!</h1>
        <h4>Dashboard</h4>

        <div className="blocks_container">
          <div className="blocks">
            <div className="img"></div>
            <div>
              <h1>112</h1>
              <p>Projects</p>
            </div>
          </div>
          <div className="blocks">
            <div className="img"></div>
            <div>
              <h1>112</h1>
              <p>Projects</p>
            </div>
          </div>
          <div className="blocks">
            <div className="img"></div>
            <div>
              <h1>112</h1>
              <p>Projects</p>
            </div>
          </div>
          <div className="blocks">
            <div className="img"></div>
            <div>
              <h1>112</h1>
              <p>Projects</p>
            </div>
          </div>
  
        </div>
        <div className="chart_container">

          <div className="bar_chart">
            <BarChart data_1={[100 , 75 , 50 , 70 , 50 , 75 ,100]}
            data_2={[90 , 65 , 40 , 60 , 40 , 65 , 90]}
            title_1="Total_income"
            title_2="Total_outcome"
            bgColor_1="rgb(0,115,255"
            bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>

          <div className="line_chart">
            <LineChart
            data1={[50 , 75 , 50 , 70 , 55 , 75 ,100]}
            data2={[ 90 , 65 , 40, 60 , 65 , 65 , 50]}
            title1="Total Sales"
            title2="Total Revenue"
            backgroundColor1="rgba(10,162,235)"
            borderColor1="rgba(53,162,235)"
            backgroundColor2="rgba(10,262,135)"
            borderColor2="rgba(53,162,235,0.4)"
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
