import { useNavigate } from "react-router-dom";

const HAdmin:React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="admin-wrapper">
      <div className="admin-card">
        <div onClick={() => navigate("/admin/profile")}>My Profile</div>
        <div onClick={() => navigate("/admin/dashboard")}>Settings</div>
        <div onClick={() => navigate("/")}>Logout</div>
      </div>
    </div>
  )
}

export default HAdmin;
