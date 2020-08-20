import React from "react";
import { ReactComponent as TransactionPicture } from "../assets/small chart.svg";

const Transaction = () => {
  return (
    <div className="transaction">
      <div className="transaction-items">
        <div className="item">
          <div className="value">
            <span>Daily Transaction Volume</span> <span> 2,342 </span>{" "}
          </div>
          <TransactionPicture />
        </div>
        <div className="item">
          <div className="value">
            <span>Daily Transaction Value</span>{" "}
            <span> &#8358; 4,000,000 </span>{" "}
          </div>
          <TransactionPicture />
        </div>
        <div className="item">
          <div className="value">
            <span>Daily Transaction Volume</span> <span> 452,000 </span>{" "}
          </div>
          <TransactionPicture />
        </div>
        <div className="item">
          <div className="value">
            <span>Daily Transaction Value</span>{" "}
            <span> &#8358; 4,000,000 </span>{" "}
          </div>
          <TransactionPicture />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
