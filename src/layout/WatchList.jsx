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
import Header from './components/header'
import Sidebar from './components/sidebar'
import ComingSoon from './components/comingSoon'


const WatchList = () => {
    const [darkmode, setDarkmode] = useState(false);
    const [kyc, setKyc] = useState(true);


    return (
        <>
            <body className={darkmode ? 'dark_mode' : 'light_mode'}>
                <Header heading= 'Watch List'></Header>
                <div className='divisioncomp'>
                   <Sidebar screenName = 'Watch List'/>
                   <ComingSoon/>
                </div>
            </body>

        </>
    )
}

export default WatchList
