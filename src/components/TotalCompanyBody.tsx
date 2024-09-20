import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import useDocumentTitle from "../utils/hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
const TotalCompanyBody = () => {
    const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
    useDocumentTitle("Total Companies - HRMS Admin template");

    const navigate = useNavigate();
  return (
    <div className={` Total_Company_Body ${isMenuOpen? " Contract" : "Expand"}`}>
        <h2>Companies</h2>
        <h4><span onClick={() => navigate('/admin/dashboard')}>Dashboard</span> / Companies</h4>

        <div className="company_container">
            <div className="company_wrapper"> 
                <div>
                    <div className="company_header">
                        <div className="img">img</div>
                        <div>
                            <p className="company_header_title">NovaWaveLLC</p>
                            <p className="ratings">⭐ 5.0</p>
                        </div>
                    </div>
                    
                    <div className="company_middle">
                        <p>robertson@gmail.com</p>
                        <p>+1 31876-4321</p>
                        <p>United States</p>
                    </div>

                    <div className="promotion">Promotion</div>

                </div>
                <div className="company_bottom">
                    <div>icons</div>
                    <div>img+15</div>
                </div>
            </div>

            <div className="company_wrapper"> 
                <div>
                    <div className="company_header">
                        <div className="img">img</div>
                        <div>
                            <p className="company_header_title">NovaWaveLLC</p>
                            <p className="ratings">⭐ 5.0</p>
                        </div>
                    </div>
                    
                    <div className="company_middle">
                        <p>robertson@gmail.com</p>
                        <p>+1 31876-4321</p>
                        <p>United States</p>
                    </div>

                    <div className="promotion">Promotion</div>

                </div>
                <div className="company_bottom">
                    <div>icons</div>
                    <div>img+15</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TotalCompanyBody
