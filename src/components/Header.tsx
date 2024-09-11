import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/sidebarToggleSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HAdmin from "./HAdmin";

const Header: React.FC = () => {
    const [isAdmin , setIsAdmin] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMenuClick = () => {
        dispatch(toggleMenu());
    }
    const openAdminHandler = () => {
        setIsAdmin(!isAdmin);
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
                <div>
                    <div onClick={openAdminHandler}>
                        Admin
                    </div>
                    {isAdmin && <HAdmin/>}
                </div>
            
            </div>
        </div>
    )
}

export default Header
