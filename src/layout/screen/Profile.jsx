import React , { useEffect, useState } from 'react'
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
import axios from 'axios'


const Profile = ({setKyc, setClicked, setDetails, setParentStockData}) => {

    const [stocks, setStocks] = useState([]);
    const [stockAllData, setStockAllData] = useState([]);
    const [startIndex, setStartIndex] = useState(1);
    // const [loadingTimeData, setLoadingTimeData] = useState([]);

    const itemsPerPage = 10;

const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [pageButtons, setPageButtons] = useState([]);

const handlePageChange = (page) => {
    console.log("page", page);  

    if(page < 1 || page > totalPages){
        return
    }
  setCurrentPage(page);
  generatePageButtons();
    setStartIndex((page - 1) * itemsPerPage);


  
};


// Generate page buttons dynamically
  const generatePageButtons = () => {
    const buttons = [];
    setPageButtons(buttons);


for (let i = 1; i <= totalPages; i++) {
    console.log("button");
    buttons.push( i
  );
}
setPageButtons(buttons);
console.log("58 stock data", stockAllData.slice(0,10));

  }



    const handleButtonClick = () => {
        setKyc(false); 
      };

      const handleClickedButton=(data) =>{
        setDetails(data);
        setClicked(true);

      }


      useEffect(() => {
        const fetchStocks = async () => {
            let loadingTimeData = [];
          try {
            const categoryList = ["mostactive" , "gainers" , "losers" , "iexvolume" , "iexpercent" ];
            for(let i = 0; i < categoryList.length; i++){
                const response = await axios.get(`https://api.iex.cloud/v1/data/CORE/STOCK_COLLECTION/list?collectionName=${categoryList[i]}&token=pk_87153c5f922e4b51b66372381d1ec6aa`);
                console.log("response", response.data);
                let previousData = loadingTimeData;
                console.log("previousData", previousData    );
                loadingTimeData = loadingTimeData.concat(response.data);            }
            console.log("loadingTimeData", loadingTimeData);
            setStockAllData(loadingTimeData);
            setStocks(loadingTimeData);
            setTotalPages(Math.ceil(loadingTimeData.length / itemsPerPage));
            generatePageButtons();
            setParentStockData(loadingTimeData.slice(0,10));
            setCurrentPage(1);
            handlePageChange(1);


          } catch (error) {
            console.error('Error fetching stocks:', error);
          }
        };
    
        fetchStocks();
      }, []);
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

    const handleInputChange = (event) => {
        console.log(event.target.value);
        if(event.target.value === '' || !event.target.value){
            console.log('empty', stockAllData);
            setStocks(stockAllData);
        
        }else{
            const filteredData = stockAllData.filter((item) => {
                return item.companyName.toLowerCase().includes(event.target.value.toLowerCase());
            });
            setStocks(filteredData);
        }
      };


  return (
    <>
      {/* table header section */}
      <div className="Head_screen">
        <div className="Head_screen_button">
          <button className="shares">Shares</button>
          <button className="Commodities">Commodities</button>
          <button className="crypto">Crypto</button>
        </div>

                <div className='Searchbar_comp'>
                    <input type="search" placeholder='Search here' className='search_bar'       onChange={handleInputChange}
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

            <div className='bottom_screen'>
                <table className='profile_table'>
                    <thead className='profile_thead' >

                        <tr className='profile_tr'>
                            <td className='rank' >Rank <img src={tableicon} alt="" /></td>
                            <td>Shares<img src={tableicon} alt="" /></td>
                            <td>Last Price<img src={tableicon} alt="" /></td>
                            <td>Change (24)<img src={tableicon} alt="" /></td>
                            <td>volume (24) <img src={tableicon} alt="" /></td>
                            <td>graph <img src={tableicon} alt="" /></td>
                        </tr>

                    </thead>
                    <tbody className='profile_tbody' >
                        {stocks.slice(startIndex, startIndex + itemsPerPage).map((TableData, index) => (
                        <tr key={index} onClick={() => handleClickedButton(TableData)}>
                            <td className='rankcircle'><button>{"#"+(startIndex + index + 1)}</button></td>

                            <td className='profile_shares' ><button className='circle_table'>{TableData.companyName[0]}</button> <span>{TableData.companyName}</span></td>
                            <td className='profile_lastprice'>{"$" + TableData.latestPrice}</td>
                            <td className={TableData.changePercent < 0 ? 'profilechangeNegative' : 'profilechange'}>{String(TableData.changePercent).replace('-', '') + "%"}</td>
                            <td className='profilevolume'>{"$" +(TableData.volume != null ? TableData.volume : 4859.9)}</td>
                            <td className='graphimg' ><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/257d1f5b-a6bb-4a50-a714-cf2292c048f3?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" /></td>
                            <td><button className='profile_buy_sell' onClick= { handleButtonClick   }>Buy <img src={buyicon} alt=""  /></button> <button className='profile_buy_sell profile_sell' onClick= { handleButtonClick   }>Sell  <img src={sellicon} alt="" /></button> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/96…ea138cf2?apiKey=382c3475e0c0434aab50e06e7c6506ec&" alt="" /> </td>
                            <td><img src = {profilemore} alt="" className='profilemore ' /></td>


                        </tr>
                        
                        ))}
                    </tbody>
                </table>

              

            </div>
            <div className='profile_nextpage'>
                <div><p className=''>Showing {stockAllData.length > 0 ? itemsPerPage + (startIndex): 0} from {stockAllData.length} data</p></div>
                <div className='profile_nextpage_btn'>
                <>
    {/* Pagination controls */}
    <button className='profile_nextpage_btn_btn' onClick={() => handlePageChange(1)}><img src={first} alt="first" /></button>
    <button className='profile_nextpage_btn_btn' onClick={() => handlePageChange(currentPage - 1)}><img src={prev} alt="prev" /></button>
    {pageButtons.map((page, index) => {

        return (
            <button key={page} className={currentPage === index + 1 ? 'profile_nextpage_btn_black_btn' : 'profile_nextpage_btn_btn'} onClick={() => handlePageChange(index + 1)}>
            {page}
            </button>
        );
        
    })}
    {/* {pageButtons} */}
    <button className='profile_nextpage_btn_btn' onClick={() => handlePageChange(currentPage + 1)}><img src={next} alt="" /></button>
    <button className='profile_nextpage_btn_btn' onClick={() => handlePageChange(totalPages)}><img src={last} alt="" /></button>
  </>
                </div>
            </div>

        </>
    )
}

export default Profile;
