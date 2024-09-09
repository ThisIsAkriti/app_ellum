import { useSelector } from "react-redux"
import { RootState } from "../utils/store"
import { useNavigate} from "react-router-dom";

const Sidebar: React.FC = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  const navigate = useNavigate();

  if(isMenuOpen){
    return(
      <div className="sidebar_wrapper01">
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
      </div>
    )
  }else{
    return(
      <div className="sidebar_wrapper">
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
      </div>
    )
  }
}

export default Sidebar