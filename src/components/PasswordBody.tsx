import { useSelector } from "react-redux";
import useDocumentTitle from "../utils/hooks/useDocumentTitle"
import { RootState } from "../utils/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordBody = () => {
  useDocumentTitle("Password Reset - HRMS admin template");
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);

  const navigate = useNavigate();

  const [newPassword , setNewPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('')
  const [resetMsg , setResetMsg] = useState("")
  const handleClickReset = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResetMsg("");
    if(newPassword === confirmPassword && newPassword != "" && confirmPassword != ""){
      setConfirmPassword("");
      setNewPassword("");
      setResetMsg("Password Reset Successfully!");
    }else if(newPassword == "" && confirmPassword == ""){
      setResetMsg("Please Input Password")
    }else{
      setResetMsg("Password does not match!")
      return;
    }
    
  }
  return (
    <div className={`password_Body ${isMenuOpen? " Contract" : "Expand"}`}>
      <h2>Password</h2>
      <h4><span onClick={() => navigate('/admin/dashboard')}>Dashboard</span> / Password</h4>
      <div className="password_body_wrapper">
        <h1>Reset Password</h1>
        <form className="password_container" action="submit">
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button onClick={handleClickReset}>Reset</button>
          <p>{resetMsg}</p>
        </form>
      </div>
    </div>
  )
}

export default PasswordBody
