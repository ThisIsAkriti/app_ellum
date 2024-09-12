import { useSelector } from "react-redux"
import { RootState } from "../utils/store"
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar: React.FC = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  const breakpoint = 768;
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
        <h2>
          <span>•</span>PAGES
        </h2>
        <ul>
          <li>
            <div onClick={() => navigate('/admin/profile')}>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Profile</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
          </li>

          <li>
            <div onClick={() => navigate('/admin/authentication')}>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Authentication</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
          </li>


          <li>
            <div onClick={() => navigate('/admin/error')}>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Error Pages</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
          </li>


          <li>
            <div onClick={() => navigate('/admin/subscription')}>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Susbcription</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Sidebar