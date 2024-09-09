import { useSelector } from "react-redux"
import { RootState } from "../utils/store"
import { Link} from "react-router-dom";

const Sidebar: React.FC = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  if(isMenuOpen){
    return(
      <div className="sidebar_wrapper01">
        <ul>
          <li>
            <Link to= {"/admin/profile"}>
              <img src="../admin.png" alt="admin" />
            </Link>
          </li>
          <li>
            <Link to= {"/admin/profile"}>
              <img src="../admin.png" alt="admin" />
            </Link>
          </li>
          <li>
            <Link to= {"/admin/profile"}>
              <img src="../admin.png" alt="admin" />
            </Link>
          </li>
          <li>
            <Link to= {"/admin/profile"}>
              <img src="../admin.png" alt="admin" />
            </Link>
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
            <Link to= {"/admin/profile"}>
            <div>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Profile</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
            </Link>
          </li>

          <li>
            <Link to= {"/admin/authentication"}>
            <div>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Authentication</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
            </Link>
          </li>


          <li>
            <Link to= {"/admin/error"}>
            <div>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Error Pages</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
            </Link>
          </li>


          <li>
            <Link to= {"/admin/subscription"}>
            <div>
              <div>
                <img src="../admin.png" alt="admin" />
                <span>Susbcription</span>
              </div>
              <img src="../rightArrow.png" alt="arrow" />
            </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar