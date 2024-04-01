import React from "react";
import { useState } from "react";
import "./screen/Profile";
import "./screen/Kyc";
import "./screen/portfolio.css";
import searchicon from "../assets/searchicon.svg";
import calender from "../assets/calender.svg";
import downarrow from "../assets/downarrow.svg";
import tableicon from "../assets/tableicon.svg";
import buyicon from "../assets/buyprofileitable.svg";
import sellicon from "../assets/sellprofiletable.svg";
import profilemore from "../assets/profilemoreicon.svg";
import first from "../assets/First.svg";
import prev from "../assets/Prev.svg";
import tablemore from "../assets/dateprofilenextpg.svg";
import next from "../assets/Next.svg";
import last from "../assets/Last.svg";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
// import image from "../assets/graph1.png"; // Import your image file

const WatchList = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [kyc, setKyc] = useState(true);
  const [isClicked, setClicked] = useState(false);
  const handleButtonClick = () => {
    setKyc(false);
  };

  const handleClickedButton = () => {
    setClicked(true);
  };

  const TableData = [
    {
      shares: "Stock 1",
      change: "2,54%",
      graph: require("../assets/graph1.png"),
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 2",
      change: "2,54%",
      graph: require("../assets/graph 2.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 3",
      change: "2,54%",
      graph: require("../assets/graph3.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 4",
      change: "2,54%",
      graph: require("../assets/graph4.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 5",
      change: "2,54%",
      graph: require("../assets/graph5.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 6",
      change: "2,54%",
      graph: require("../assets/graph6.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 7",
      change: "2,54%",
      graph: require("../assets/graph7.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 8",
      change: "2,54%",
      graph: require("../assets/graph8.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 9",
      change: "2,54%",
      graph: require("../assets/graph9.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock 10",
      change: "2,54%",
      graph: require("../assets/graph10.svg").default,
      low: require("../assets/low_high.svg").default,
      high: "",
      takeProfit: "",
      pnl: "-485",
    },
  ];

  return (
    <>
      <body className={darkmode ? "dark_mode" : "light_mode"}>
        <Header heading="Watch List"></Header>
        <div className="divisioncomp">
          <Sidebar screenName="Watch List" />

          <div className="ProfileCom">
            <div className="Head_screen">
              <div className="Head_screen_button">
                <button className="shares">Shares</button>
                <button className="Commodities">Commodities</button>
                <button className="crypto">Crypto</button>
              </div>

              <div className="Searchbar_comp">
                <input
                  type="search"
                  placeholder="Search here"
                  className="search_bar"
                />
                <img src={searchicon} alt="" />
              </div>

              <div className="Calenderbar">
                <img className="calenderimg" src={calender} alt="" />
                <div className="calendertext">
                  <h1>Filter Periode</h1>
                  <p>4 June 2023 - 4 Jan 2024</p>
                </div>
                <img className="calenderarrowimg" src={downarrow} alt="" />
              </div>
            </div>

            <div className="bottom_screen">
              <table className="profile_table">
                <thead className="profile_thead">
                  <tr className="profile_tr">
                    <td>
                      Shares
                      <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Change (24h) <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Graph
                      <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Low <img src={tableicon} alt="" />
                    </td>
                    {/* <td>
                      Lost Price <img src={tableicon} alt="" />
                    </td> */}
                    <td>
                      High <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Buy <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Sell <img src={tableicon} alt="" />
                    </td>
                  </tr>
                </thead>
                <tbody className="profile_tbody" onClick={handleClickedButton}>
                  {TableData.map((data, index) => (
                    <tr key={index}>
                      <td className="profile_shares">
                        <button className="circle_table">S</button>{" "}
                        <span>{data.shares}</span>
                      </td>
                      {/* <td className="profile_lastprice">{data.leverage}</td> */}
                      <td className="profilechange">{data.change}</td>
                      <td>
                        <img
                          src={data.graph}
                          alt="Graph"
                          style={{ width: "90px", height: "auto" }}
                        />
                      </td>
                      <td rowSpan={1}>
                        <img
                          src={data.low}
                          alt="Low and High"
                          style={{ width: "200px", height: "auto" }}
                        />
                      </td>
                      <td>{/* <img src={graph1} alt="Stock" /> */}</td>{" "}
                      {/* Display image instead of volume */}
                      <td className="profilevolume">{data.volume}</td>
                      <td
                      // style={{ background: "#f5f5f5", fontFamily: "Poppins" }}
                      >
                        {data.pnl}
                      </td>
                      <td>
                        <button
                          className="profile_buy_sell"
                          onClick={handleButtonClick}
                        >
                          Buy <img src={buyicon} alt="" />
                        </button>{" "}
                        {/* <button
        className="profile_buy_sell profile_sell"
        onClick={handleButtonClick}
      >
        Sell <img src={sellicon} alt="" />
      </button>{" "} */}
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/96…ea138cf2?apiKey=382c3475e0c0434aab50e06e7c6506ec&"
                          alt=""
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default WatchList;
