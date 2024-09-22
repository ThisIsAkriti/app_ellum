import { useSelector } from "react-redux"
import { RootState } from "../utils/store"
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar: React.FC = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  const breakpoint = 991;
  const [windowWidth , setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth)
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize' , handleResize);
    return () => {
      window.removeEventListener('resize' , handleResize);
    }
  } , [])
  const shouldMenuOpen = window.innerWidth >= breakpoint ? isMenuOpen: !isMenuOpen; 
  const navigate = useNavigate();

  if(shouldMenuOpen){
    return(
      <nav className="sidebar_wrapper01">
        <ul>
          <li>
            <div onClick={() => navigate('/admin/profile')}>
              <img src="../admin.png" alt="admin" />
            </div>
          </li>
          <li>
            <div onClick={() => navigate('/admin/profile')}>
              <img src="../admin.png" alt="admin" />
            </div>
          </li>
          <li>
            <div onClick={() => navigate('/admin/profile')}>
              <img src="../admin.png" alt="admin" />
            </div>
          </li>
          <li>
            <div onClick={() => navigate('/admin/profile')}>
              <img src="../admin.png" alt="admin" />
            </div>
          </li>
          </ul>
      </nav>
    )
  }else{
    return(
      <nav className="sidebar_wrapper">
        <div>
          <h2>
            <span>•</span>Dashboard
          </h2>
          <ul>

            <li>
              <div onClick={() => navigate('/admin/totalCompanies')}>
                <div>
                  <img src="../admin.png" alt="admin" />
                  <span>Total Companies</span>
                </div>
                <img src="../rightArrow.png" alt="arrow" />
              </div>
            </li>


            <li>
              <div onClick={() => navigate('/admin/memberShip')}>
                <div>
                  <img src="../admin.png" alt="admin" />
                  <span>Membership expire</span>
                </div>
                <img src="../rightArrow.png" alt="arrow" />
              </div>
            </li>


            <li>
              <div onClick={() => navigate('/admin/newcompany')}>
                <div>
                  <img src="../admin.png" alt="admin" />
                  <span>New companies</span>
                </div>
                <img src="../rightArrow.png" alt="arrow" />
              </div>
            </li>

            <li>
              <div onClick={() => navigate('/admin/newTickets')}>
                <div>
                  <img src="../admin.png" alt="admin" />
                  <span>New tickets</span>
                </div>
                <img src="../rightArrow.png" alt="arrow" />
              </div>
            </li>

          </ul>
        </div>

        <div>
          <h2>
            <span>•</span>Add new company
          </h2>
        </div>

        <div>
          <h2>
            <span>•</span>View all companies
          </h2>
        </div>

        <div>
          <h2>
            <span>•</span>Profile Settings
          </h2>
          <ul>
            <li>
              <div onClick={() => navigate('/admin/password')}>
                <div>
                  <img src="../admin.png" alt="admin" />
                  <span>Password</span>
                </div>
                <img src="../rightArrow.png" alt="arrow" />
              </div>
            </li>
          </ul>
        </div>

        
      </nav>
    )
  }
}

export default Sidebar