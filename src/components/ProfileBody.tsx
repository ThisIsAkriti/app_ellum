import { useState } from "react";
import DProfile from "./DProfile";
import info from "../utils/data/info_profile.json";
import DProjects from "./DProjects";
import DStatutory from "./DStatutory";
import DAssets from "./DAssets";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const ProfileBody:React.FC = () => {
    const profileData = info.data;
    const [activateCard , setActivate] = useState("profile");
    const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
    const handleButtonClicked = (card : string) => {
        setActivate(card);
    }
    return(
        <div className={` profile-body ${isMenuOpen? " Contract" : "Expand"}`}>
            <h2>Profile</h2>
            <h4>Dashboard / Profile</h4>
            {profileData.map((data) => (
                <div key={data.id} className="profile_card">
                    <div className="profile_Left">
                        <div className="img"></div>
                        <div className="person_details">
                            <div>
                                <h3>{data.name}</h3>
                                <h5>{data.team}</h5>
                                <small>{data.profession}</small>
                            </div>
                            <div className="lines">
                                <div className="id"> Employee ID: {data.empId}</div>
                                <div className="date">Date of Join:{data.date}</div>
                            </div>
                            <button>
                                Send Message
                            </button>
                        </div>
                            
                    </div>
                    <div 
                    className="profile_right">
                        <ul>
                            <li>Phone:
                                <div className="num">{data.date}</div>
                            </li>
                            <li>Email:
                                <div className="email">{data.email}</div>
                            </li>
                            <li>Birthday:
                                <div>{data.birth}</div>
                            </li>
                            <li>Address:
                                <div>{data.address}</div>
                            </li>
                            <li>Gender:
                                <div>{data.gender}</div>
                            </li>
                            <li>Reports to:
                                <div>
                                    <img src="" alt="img" /> 
                                    <span className="name">{data.reportTo}</span>
                                </div>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            ))}

            <div className="profile_card02_nav">
                <nav>
                    <div onClick={() => handleButtonClicked('profile')}>Profile</div>
                    <div onClick={() => handleButtonClicked('projects')}>Projects</div>
                    <div onClick={() => handleButtonClicked('bank')}>Bank and Statutory <span>(Admin Only)</span></div>
                    <div onClick={() => handleButtonClicked('assets')}>Assets</div>
                </nav>
                {activateCard === 'profile' && <DProfile/>}
                {activateCard === 'projects' && <DProjects/>}
                {activateCard === 'bank' && <DStatutory/>}
                {activateCard === 'assets' && <DAssets/>}
            </div>
        </div>
    )
}
export default ProfileBody;