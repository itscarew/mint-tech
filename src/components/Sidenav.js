import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon1 } from "../assets/Group(1).svg";
import { ReactComponent as Icon2 } from "../assets/Group 7.svg";
import { ReactComponent as Icon3 } from "../assets/Group 7.2.svg";
import { ReactComponent as Icon4 } from "../assets/recon.svg";
import { ReactComponent as Icon5 } from "../assets/Group (2).svg";
import { ReactComponent as Icon6 } from "../assets/ic_fiber_manual_record_48px.svg";
import { ReactComponent as Icon7 } from "../assets/wallet-43.svg";
import { ReactComponent as Icon8 } from "../assets/lock.svg";
import { ReactComponent as Icon9 } from "../assets/person.svg";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-items">
        <button>Genrate Invoice</button>

        <span>Main</span>
        <ul>
          <li className="styled">
            {" "}
            <Link to="/">
              {" "}
              <Icon5 /> Overview{" "}
            </Link>{" "}
          </li>
        </ul>
        <span>Payments</span>
        <ul>
          <li>
            {" "}
            <Link to="/">
              {" "}
              <Icon1 /> All Payments{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/">
              {" "}
              <Icon4 /> Reconcilled Payments{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">
              {" "}
              <Icon7 /> Un-Reconcilled Payments{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/">
              {" "}
              <Icon6 /> Manual Setlements{" "}
            </Link>{" "}
          </li>
        </ul>
        <span>Orders</span>
        <ul>
          <li>
            {" "}
            <Link to="/">
              {" "}
              <Icon8 /> All Orders{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">
              {" "}
              <Icon2 /> Pending Orders{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">
              {" "}
              <Icon3 /> Reconcilled Orders{" "}
            </Link>{" "}
          </li>
          <li className="merchant-profile" >
            {" "}
            <Link to="/">
              {" "}
              <Icon9 /> Merchant Profile{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
