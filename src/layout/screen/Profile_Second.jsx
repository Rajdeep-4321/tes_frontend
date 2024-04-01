import React, { useState, useEffect } from 'react'
import './Profile_second.css'
import graph from '../../assets/profilesecondgraph.svg'
import searchicon from '../../assets/searchicon.svg'
import psrgraph from '../../assets/psright2graph.svg'
import camera from '../../assets/camera.svg'
import maximize from '../../assets/maximize.svg'
import getreport from '../../assets/getsprotimg.svg'
import ps_arrow from '../../assets/ps3aroow.svg'
import ps_frame from '../../assets/psframe.svg'
import psbtnimg from '../../assets/psbtnimg.svg'
import psbtnimgone from '../../assets/psbtnimgone.svg'
import showmore from '../../assets/showmore.svg'
import { all } from 'axios'

const Profile_Second = ({details, allStockData}) => {
    console.log("allStockData", details  );
    const [stockDetails, setStockDetails] = useState(details);
    console.log("stockDetails", stockDetails);


    // useEffect(() => {
    //    setStockDetails(details);
    //   }, [details]);

    const onChange = (stock) => {
        console.log("stock", stock);    
        setStockDetails(stock);
    };

    function formatNumberWithK(num) {
        try{
            if (num >= 1000 && num < 1000000) {
                return (num / 1000).toFixed(0) + 'K';
            } else if (num >= 1000000) {
                return (num / 1000000).toFixed(0) + 'M';
            } else {
                return num.toString();
            }
        }catch(e){
            return "40 K"
        }
    }
    return (
        <>
            <section className='pssection'>
                <div className='psleft'>
                    <div className='psleftbox'>
{/* jaydeep */}
                        <div className='headertext'>
                            <h1 className='marketPreviews'>Market Previews</h1>
                           {allStockData.map((stock, index) => {

                            return (
                                <div className='leftboxcontent' onClick = {() => onChange(stock)}>
                                <button className='psbtn'>{stock.companyName[0]}</button>
                                <div className='pstext'>
                                    <h1 className='psstock'>{stock.companyName.split(' ')[0]}</h1>
                                    <p className='psmonth'>February</p>
                                </div>
                                <div className='psgraphimg'>
                                    <img src={graph} alt="" />
                                </div>

                                <div className='psamount'>
                                    <h1>120.45</h1>
                                    <p>1,24%</p>
                                </div>
                            </div>
                            )
                           })}


                       


                         
                        </div>
                        <div className='showmorebox'>
                        <button className = "showmore">show more <img src={showmore} alt="" /></button>
                        </div>
                    </div>

                </div>
                <div className="psright">
                    <div className='psrightbox'>
                        <div className='rgstock'>

                            <button className='psrgbtn'>{stockDetails.companyName != null ? stockDetails.companyName[0] : ""}</button>
                            <div className='psrgtext'>
                                <p className='psrgmonth'>{stockDetails.companyName}</p>
                                <h1 className='psrgstock'>STC / USD</h1>
                            </div>
                        </div>
                        <div className="psline"></div>

                        <div className="markprice">
                            <p>Mark Price</p>
                            <div className='markpricediv'>
                                <h1>{stockDetails.latestPrice}</h1>
                                <h2>-3.28%</h2>
                            </div>
                        </div>

                        <div className="psline"></div>

                        <div className="fundingrate">
                            <p>Funding Rate</p>
                            <h1>-0,0252%/hr</h1>

                        </div>
                        <div className="psline"></div>
                        <div className="volume">
                            <p>Volume</p>
                            <h1>{formatNumberWithK(stockDetails.volume)}</h1>
                        </div>
                        <div className="psline"></div>

                        <div className='pssearch'>
                            <input type="search" placeholder='Search here' />
                            <img src={searchicon} alt="" />
                        </div>

                    </div>


                    <div className='psrightbox2'>
                        <div className='psrightbox2header'>
                            <div className='psrgboxtext'>
                                <p className='psrgmonth'>{ !details?.companyName ? "Stock 1":details?.companyName }</p>
                                <h1 className='psrgstock'>STC / USD</h1>

                            </div>

                            <div className="psweektoday">
                                <p>Week</p>
                                <button className='todaybtn'>Today</button>
                                <p>year</p>
                                <img src={camera} alt="" />
                                <img src={maximize} alt="" />
                                <div className='psline'></div>
                                <button className='psgetreport'> <img src={getreport} alt="" />Get Report</button>
                            </div>
                        </div>

                        <div className="psgraph2">
                            <img src={psrgraph} alt="" />
                        </div>
                    </div>

                    <div className='psrightbox3'>
                        <div className='ps3left'>
                            <div className='ps3leftinside'>
                                <div className='ps3leftinside1'>
                                    <h1>$22,562.14  <span>7%</span> <img src={ps_arrow} alt="" /></h1>
                                    <p>Last Week <span>$563,443</span> </p>

                                </div>
                                <button className='ps3getreport'> <img src={getreport} alt="" />Get Report</button>
                            </div>
                            <div className='ps_frame'><img src={ps_frame} alt="" /></div>
                        </div>
                        <div className='ps3right'>
                            <div className='psbox'>
                                <div className='ps3rightcontent'>
                                    <div className='ps3rightcontenttext'>
                                        <h1>Quick Trade</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                    <div className='ps3btn'>
                                        <button>
                                            s
                                        </button>
                                        <p>2028.12</p>
                                    </div>
                                </div>

                                <div>
                                    <div className='pssizebox'>
                                        <p>Size</p>
                                        <div className='pssizeboxcontent'>
                                            <button>+</button>
                                            <span>5.4</span>
                                            <button>-</button>
                                        </div>

                                    </div>
                                    <p className='marginrequired'>Margin required is 506.68</p>
                                </div>

                                <div className="psinpbox">
                                    <p>When Price is</p>
                                    <input type="checkbox" id="toggle" />
                                    <label for="toggle"></label>
                                </div>
                                <hr className='hr' />

                                <div className="psinpbox">
                                    <p>When Price is</p>
                                    <input type="checkbox" id="toggleone" />
                                    <label for="toggleone"></label>
                                </div>
                                <hr className='hr' />

                                <div className="psinpbox">
                                    <p>When Price is</p>
                                    <input type="checkbox" id="toggletwo" />
                                    <label for="toggletwo"></label>

                                </div>


                                <div className='psbottomebtn'>
                                    <button className='psbuy'>BUY <img src={psbtnimgone} alt="" /></button>
                                    <button className='pssell'>SEll <img src={psbtnimg} alt="" /></button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile_Second
