import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../assets/sidebarlogo.svg'
import menuicon from '../assets/menuicon.svg'
import notification from '../assets/notification.svg'
import profile from '../assets/profile.svg'
import { NavLink } from 'react-router-dom'
import Profile from './screen/Profile'
import Kyc from './screen/Kyc'
import Profile_Second from './screen/Profile_Second'
import AuthService from '../services/Auth'



const SidebarNew = () => {


    const [darkmode, setDarkmode] = useState(false);

    const [kyc, setKyc] = useState(true);

    const handleProfileClick = () => {
        AuthService.logout();
        window.location.reload();
      };

    return (
        <>
            <body className={darkmode ? 'dark_mode' : 'light_mode'}>
                <div  className={kyc ? 'kychidden' : 'kycshow'}><Kyc/></div>

                <div className='sidemainheader'>
                    <div className="sideHeader">
                        <div className="sidebarlogo ">
                            <img src={logo} alt="" id="sidebarlogoimg" onClick={() => setKyc(!kyc)} />
                            <h1 className='sidelogoName'>Tes Markets</h1>
                        </div>
                    </div>
                    {/* Header */}
                    <div className='mainHeader'>
                        <div className='headermenuicon'>
                            <img src={menuicon} alt="" />
                            <h1>Explore Market</h1>
                        </div>

                        <div className='mainHeader2'>
                            <span className='darkmodetext'>Dark Mode</span>
                            <label class="switch">
                                <input type="checkbox" onChange={() => setDarkmode(!darkmode)} />
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
                <div className='divisioncomp'>
                    <div className="sidebarmain">
                        <div className="sidenav">
                            <div className="navmenu">
                                <NavLink to="/kyc"  className='navitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/300d087c77f46e88907f8255b23e74d366838da3c79d5577e50f355677d2e191?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>Dashboard</span>
                                </NavLink>
                                <NavLink to="" className='navitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/585eeb1c5c7620eb7b777e87a9f53875368d0013de86995b3411d9efbc158942?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>All Orders</span>
                                </NavLink>
                                <NavLink to="" className='navitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/437e83b9c3783e947a137bf48d8ac96a508d4fe7315357b093a9a95c63bd8a9f?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>Watch List</span>
                                </NavLink>
                                <NavLink to="" className='navitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f68d4d1c5f84649e8f9e9b9e7703f6b50515d85b9dd183fd235768ad8ebfee2?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>Explore Market </span>
                                </NavLink>

                                <NavLink to="" className='navitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4153abaae59c7a960a73f50f442a2d4065abf8f123dda350b230d1219e20239?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>Portfolio</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="bottom_nav">

                            <div className="navmenu">
                                <span className='categoryname'>Category Name </span>
                                <a href="#" className='bnavitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c76617ad23cb04490b582e40c43f7d72841eb7eefbf7880c4453014178908a2?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>Option 1</span>
                                </a>
                                <a href="#" className='bnavitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c76617ad23cb04490b582e40c43f7d72841eb7eefbf7880c4453014178908a2?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>Option 2</span>
                                </a>
                                <a href="#" className='bnavitem'>
                                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c76617ad23cb04490b582e40c43f7d72841eb7eefbf7880c4453014178908a2?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" />
                                    <span>Option 3</span>
                                </a>
                            </div>
                        </div>

                        <div className='sidefooter'>
                            <h1>Tes Markets Platform</h1>
                            <span> &copy; 2024 All Rights Reserved</span>
                        </div>

                    </div>

                    

                    {/* <div className='ProfileCom'><Profile_Second/></div> */}
                    {/* <div className='ProfileCom'><Profile/></div> */}

                </div>
            </body>

        </>
    )
}

export default SidebarNew
