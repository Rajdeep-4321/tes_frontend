import React, { useState } from 'react'
import '../../layout/Sidebar.css'
import '../Sidebar.css'
import logo from '../../assets/sidebarlogo.svg'
import menuicon from '../../assets/menuicon.svg'
import notification from '../../assets/notification.svg'
import profile from '../../assets/profile.svg'
import { NavLink } from 'react-router-dom'
import Profile from '../screen/Profile'
import Kyc from '../screen/Kyc'
import Profile_Second from '../screen/Profile_Second'
import AuthService from '../../services/Auth'

const Header = (props) => {
    let header = "";
    if(props.heading){
        header = props.heading;
    }

    

    const [kyc, setKyc] = useState(true);

    const handleProfileClick = () => {
        AuthService.logout();
        window.location.reload();
      };
    return (
        <div className='sidemainheader'>
        <div className="sideHeader">
            <div className="sidebarlogo ">
                <img src={logo} alt="" id="sidebarlogoimg" />
                <h1 className='sidelogoName'>Tes Markets</h1>
            </div>
        </div>
        <div className='mainHeader'>
            <div className='headermenuicon'>
                <img src={menuicon} alt="" />
                <h1>{header}</h1>
            </div>

            <div className='mainHeader2'>
                <span className='darkmodetext'>Dark Mode</span>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <div className='rightsideheader'>
                    <a href="#" class="notification">
                        <img className='notificationimg' src={notification} alt="" />
                        <span class="badge">34</span>
                    </a>
                    <div className='line'></div>
                    <div className='profileheader'>
                        <div>
                            <h1>John</h1>
                            <span>@uxDesing</span>
                        </div>
                        <img className='profileimg' src={profile} alt="" onClick={handleProfileClick}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;