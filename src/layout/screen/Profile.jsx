import React from 'react'
import './Profile.css'
import searchicon from '../../assets/searchicon.svg'
import calender from '../../assets/calender.svg'
import downarrow from '../../assets/downarrow.svg'
import tableicon from '../../assets/tableicon.svg'
import buyicon from '../../assets/buyprofileitable.svg'
import sellicon from '../../assets/sellprofiletable.svg'
import profilemore from '../../assets/profilemoreicon.svg'
import first from '../../assets/First.svg'
import prev from '../../assets/Prev.svg'
import tablemore from '../../assets/dateprofilenextpg.svg'
import next from '../../assets/Next.svg'
import last from '../../assets/Last.svg'


const Profile = ({setKyc, setClicked}) => {

    const handleButtonClick = () => {
        setKyc(false); 
      };

      const handleClickedButton=() =>{
        setClicked(true);
      }
    const TableData = [
        {
            rank: "#1",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",
        },
        {
            rank: "#2",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",
        },
        {
            rank: "#3",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",

        },
        {
            rank: "#4",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",
            img: "../../assets/downarrow.svg"

        },
        {
            rank: "#5",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",
            img: "../../assets/downarrow.svg"

        },


        {
            rank: "#6",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",
            img: "../../assets/downarrow.svg"

        },

        
        {
            rank: "#7",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",
            img: "../../assets/downarrow.svg"

        },


        
        {
            rank: "#8",
            shares: "Stock1",
            lastprice: "$20,911.48",
            change: "2.54%",
            volume: "$220,083,007,631",
            img: "../../assets/downarrow.svg"

        },






    ]


    return (
        <>
            {/* table header section */}
            <div className='Head_screen'>
                <div className='Head_screen_button'>
                    <button className='shares'>Shares</button>
                    <button className='Commodities'>Commodities</button>
                    <button className='crypto'>Crypto</button>
                </div>

                <div className='Searchbar_comp'>
                    <input type="search" placeholder='Search here' className='search_bar' />
                    <img src={searchicon} alt="" />
                </div>

                <div className='Calenderbar'>
                    <img className='calenderimg' src={calender} alt="" />
                    <div className='calendertext'>
                        <h1>Filter Periode</h1>
                        <p>4 June 2023 - 4 Jan 2024</p>
                    </div>
                    <img className='calenderarrowimg' src={downarrow} alt="" />
                </div>
            </div>

            {/* table header section end */}

            <div className='bottom_screen'>
                <table className='profile_table'>
                    <thead className='profile_thead' >

                        <tr className='profile_tr'>
                            <td className='rank' >Rank <img src={tableicon} alt="" /></td>
                            <td>Shares<img src={tableicon} alt="" /></td>
                            <td>Lost Price<img src={tableicon} alt="" /></td>
                            <td>Change (24)<img src={tableicon} alt="" /></td>
                            <td>volume (24) <img src={tableicon} alt="" /></td>
                            <td>graph <img src={tableicon} alt="" /></td>
                        </tr>

                    </thead>
                    <tbody className='profile_tbody' onClick = {handleClickedButton}>
                        {TableData.map(TableData => (<tr key={TableData.rank}>
                            <td className='rankcircle'><button>{TableData.rank}</button></td>
                            <td className='profile_shares' ><button className='circle_table'>S</button> <span>{TableData.shares}</span></td>
                            <td className='profile_lastprice'>{TableData.lastprice}</td>
                            <td className='profilechange'>{TableData.change}</td>
                            <td className='profilevolume'>{TableData.volume}</td>
                            <td className='graphimg' ><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" /></td>
                            <td><button className='profile_buy_sell' onClick= { handleButtonClick   }>Buy <img src={buyicon} alt=""  /></button> <button className='profile_buy_sell profile_sell' onClick= { handleButtonClick   }>Sell  <img src={sellicon} alt="" /></button> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/96…ea138cf2?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" /> </td>
                            <td><img src = {profilemore} alt="" className='profilemore ' /></td>


                        </tr>))}
                    </tbody>
                </table>

              

            </div>
            <div className='profile_nextpage'>
                <div><p className=''>Showing 10 from 160 data</p></div>
                <div className='profile_nextpage_btn'>
                    <button className='profile_nextpage_btn_btn'><img src={first} alt="first" /></button>
                    <button className='profile_nextpage_btn_btn'><img src={prev} alt="prev" /></button>
                    <button className='profile_nextpage_btn_black_btn'>1</button>
                    <button className='profile_nextpage_btn_btn'>2</button>
                    <button className='profile_nextpage_btn_btn' > 3</button>
                    <button className='tablemore'><img src={tablemore} alt="" /></button>
                    <button className='profile_nextpage_btn_btn'>10</button>
                    <button className='profile_nextpage_btn_btn'><img src={next} alt="" /></button>
                    <button className='profile_nextpage_btn_btn'><img src={last} alt="" /></button>
                </div>
            </div>

        </>
    )
}

export default Profile
