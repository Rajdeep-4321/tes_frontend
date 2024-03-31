import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../assets/sidebarlogo.svg";
import menuicon from "../assets/menuicon.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/profile.svg";
import { NavLink } from "react-router-dom";
import Profile from "./screen/Profile";
import Kyc from "./screen/Kyc";
import Profile_Second from "./screen/Profile_Second";
import AuthService from "../services/Auth";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const ExploreMarkets = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [kyc, setKyc] = useState(true);
  const [isClicked, setClicked] = useState(false);
  const [details, setDetails] = useState({});
  const [allStockData, setAllStockData] = useState([]);

  return (
    <>
      <body className={darkmode ? "dark_mode" : "light_mode"}>
        <div className={kyc ? "kychidden" : "kycshow"}>
          <Kyc />
        </div>

        <Header heading="Explore Market"></Header>
        <div className="divisioncomp">
          <Sidebar screenName="Explore Market" />
          {/* <div className='ProfileCom'><Profile_Second/></div> */}
          {!isClicked ? (
            <div className="ProfileCom">
              <Profile setKyc={setKyc} setClicked={setClicked}  setDetails={setDetails} setParentStockData = {setAllStockData}/>
            </div>
          ) : (
            <div className="ProfileCom">
              <Profile_Second details = {details} allStockData={allStockData} />
            </div>
          )}
          {/* <div className='ProfileCom'  ><Profile setKyc={setKyc}/></div> */}
        </div>
      </body>
    </>
  );
};

export default ExploreMarkets;
