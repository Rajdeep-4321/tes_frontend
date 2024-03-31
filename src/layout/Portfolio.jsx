import React from "react";
import { useState } from "react";
import "./screen/Profile";
import "./screen/Kyc";
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

const Portfolio = () => {
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
      shares: "Stock1",
      leverage: "1.5",
      change: "788",
      volume: "12545",
      lostPrice: "",
      stopLoss: "",
      takeProfit: "",
      pnl: "-485",
    },
    {
      shares: "Stock1",
      leverage: "1.5",
      change: "788",
      volume: "12545",
      lostPrice: "",
      stopLoss: "",
      takeProfit: "",
      pnl: "-485",
    },
  ];

  return (
    <>
      <body className={darkmode ? "dark_mode" : "light_mode"}>
        <Header heading="Portfolio"></Header>
        <div className="divisioncomp">
          <Sidebar screenName="Portfolio" />

          <div className="ProfileCom">
            {/* table header section */}
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

            {/* table header section end */}

            <div className="bottom_screen">
              <table className="profile_table">
                <thead className="profile_thead">
                  <tr className="profile_tr">
                    <td>
                      Shares
                      <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Leverage
                      <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Entry
                      <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Lost Price <img src={tableicon} alt="" />
                    </td>
                    {/* <td>
                      Lost Price <img src={tableicon} alt="" />
                    </td> */}
                    <td>
                      Stop Loss <img src={tableicon} alt="" />
                    </td>
                    <td>
                      Take Profit <img src={tableicon} alt="" />
                    </td>
                    <td>
                      P&L <img src={tableicon} alt="" />
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
                      <td className="profile_lastprice">{data.leverage}</td>
                      <td className="profilechange">{data.change}</td>
                      <td className="profilevolume">{data.volume}</td>
                      <td>{data.lostPrice}</td>
                      <td
                        style={{ background: "#f5f5f5", fontFamily: "Poppins" }}
                      >
                        {data.stopLoss}
                      </td>

                      <td
                        style={{ background: "#f5f5f5", fontFamily: "Poppins" }}
                      >
                        {data.takeProfit}
                      </td>
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

  return (
    <>
      {/* table header section */}
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

      {/* table header section end */}

      <div className="bottom_screen">
        <table className="profile_table">
          <thead className="profile_thead">
            <tr className="profile_tr">
              {/* <td className="rank">
                Rank <img src={tableicon} alt="" />
              </td> */}
              <td>
                Shares
                <img src={tableicon} alt="" />
              </td>
              <td>
                Leverage
                <img src={tableicon} alt="" />
              </td>
              <td>
                Entry
                <img src={tableicon} alt="" />
              </td>
              <td>
                Lost Price <img src={tableicon} alt="" />
              </td>
              <td>
                Lost Price <img src={tableicon} alt="" />
              </td>
              <td>
                Stop Loss <img src={tableicon} alt="" />
              </td>
              <td>
                Take Profit <img src={tableicon} alt="" />
              </td>
              <td>
                P&L <img src={tableicon} alt="" />
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
                <td className="profile_lastprice">{data.lastprice}</td>
                <td className="profilechange">{data.change}</td>
                <td className="profilevolume">{data.volume}</td>
                <td>{data.lostPrice}</td>
                <td>{data.stopLoss}</td>
                <td>{data.takeProfit}</td>
                <td>{data.pnl}</td>
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
      <div className="profile_nextpage"></div>
    </>
  );
};

export default Portfolio;
