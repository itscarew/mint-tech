import React from "react";
import { ReactComponent as Search } from "../assets/Search.svg";
import Table from "./Table";

const Payment = () => {
  return (
    <div className="payment">
      <div className="title">Payments</div>
      <div className="sub">
        <div className="showing">
          <span> Showing </span>
          <select>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          <span> out of 500 payments</span>
        </div>

        <div className="search">
          <Search />
          <input type="text" placeholder="Search payments..." />
        </div>

        <div className="show-all">
          <span> Show </span>
          <select>
            <option value="all">All</option>
            <option value="reconcile">Reconcile</option>
            <option value="un-reconcile">Un-reconcile</option>
            <option value="Settled">Settled</option>
          </select>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Payment;
