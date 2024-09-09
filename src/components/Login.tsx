import { useState } from "react";
import { employees} from "../utils/mockData";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email , setEmail] = useState(employees[1].email);
    const [password , setPassword] = useState(employees[1].password);
    const [login , setLogin] = useState(false);
    const [error , setError] = useState(false);
    const navigate = useNavigate();
    const handleClicklogin = (e:React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const employee = employees.find((emp) => emp.email === email && emp.password === password);

        if(employee) {
            setLogin(true);
            navigate('/admin/dashboard');
        }else{
            setError(true);
        }
       
    }
  return (
    <div className="main_container">
        <div className="apply_button_container">
            <div className="apply_button">Apply Job</div>
        </div>
        <div className="form_container">
            <div className="form_content">
                <h1>Login</h1>
                <p className="dashboard_pTag">Access to our dashboard</p>
                <form action="submit">
                    <div className="input_Fields1">
                        <span>Email Address</span>
                        <input type="text" placeholder="example123@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input_Fields2">
                        <div>
                            <span className="password">Password</span>
                            <span className="forgot-password">Forgot password?</span>
                        </div>
                        
                        <input type="password" name="password" placeholder="123#!&9"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login_button" onClick={handleClicklogin}>Login</div>
                </form>
                <p className="last-pTag">Don't have an account yet? <span className="register">Register</span></p>
                {login && <p className="Loggedin">Login successfull!</p>}
                {error && <p className="error">Invalid credentials.Try again!</p>}
            </div>
        </div>
        
    </div>
  )
}

export default Login
