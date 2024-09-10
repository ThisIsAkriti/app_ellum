import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/sidebarToggleSlice";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMenuClick = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className="header_container">
            <div className="leftSide_header">
                <img onClick={handleMenuClick} className="screenMenu" src="../hamburgerBold.png" alt="menu" />
                <p>logo</p>
                <img onClick={handleMenuClick}  className="pcMenu" src="../hamburgerBold.png" alt="menu" />
                <p onClick={() => navigate('/admin/Dashboard')}>Dreams Technologies</p>
            </div>
            <div className="rightSide_header">
                <div className="search-bar">
                    <input type="text" placeholder="Search here" />
                    <img src="../searchIcon.png" alt="search" />
                </div>
                <div className="notification">
                    <img src="../notification.png" alt="notifications" />
                </div>
                <div className="message">
                    <img src="../msgIcon.png" alt="msg" />
                </div>
                <div>Admin</div>
            </div>
        </div>
    )
}

export default Header
