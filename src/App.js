import React from "react";
import Login from "./Login";
import Sidebar from "./layout/ExploreMarkets";
import table from "./layout/screen/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kyc from "./layout/screen/Kyc";
import Profile_Second from "./layout/screen/Profile_Second";
import AuthService from "./services/Auth";
import ExploreMarkets from "./layout/ExploreMarkets";
import Dashboard from "../src/layout/Dashboard";
import Portfolio from "../src/layout/Portfolio";
import WatchList from "./layout/WatchList";
import AllOrders from "./layout/AllOrders";
import Register from "./layout/screen/Register";
// import R from "./layout/screen/Register.css";

function App() {
  const userData = AuthService.getCurrentUser();
  if (!userData) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="register" Component={Register} />
            <Route path="*" Component={Login} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/" Component={Sidebar} />

          <Route path="profile" Component={ExploreMarkets} />
          <Route path="dashboard" Component={Dashboard} />
          <Route path="all-orders" Component={AllOrders} />
          <Route path="portfolio" Component={Portfolio} />
          <Route path="watchlist" Component={WatchList} />

          <Route path="explore-market" Component={ExploreMarkets} />

          <Route path="table" Component={table} />
          <Route path="kyc" Component={Kyc} />
          <Route path="profilesecond" Component={Profile_Second} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
