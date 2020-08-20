import React from "react";
import SideNav from "../components/Sidenav";
import Transaction from "../components/Transaction";
import BioGraph from "../components/BioGraph";
import Payment from "../components/Payment";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="layout">
      <div className="layout-items">
        <div className="body-layout">
          <div className="sidenav-layout">
            <SideNav />
          </div>
          <div className="content-layout">
            <Transaction />
            <BioGraph />
            <Payment />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
