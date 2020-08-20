import React from "react";

import Gradient from "../assets/Gradient.png";

import { ReactComponent as Arrow1 } from "../assets/Object.svg";
import { ReactComponent as Arrow } from "../assets/Object(1).svg";

const BioGraph = () => {
  return (
    <div className="biograph">
      <div className="biograph-items">
        <div className="graph">
          <div className="date">
            <span>Today : 5, August 2018</span>
            <div>
              <div className="dropdown-date">
                <select>
                  <option value="1">1st Jan - 1 June</option>
                  <option value="2">1st Jan - 1 June</option>
                  <option value="3">1st Jan - 1 June</option>
                  <option value="4">1st Jan - 1 June</option>
                </select>
              </div>
              <div className="arrows">
                <div>
                  <Arrow1 />
                </div>
                <div>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="month">
            <div>Jan</div>
            <div>Feb</div>
            <div>Mar</div>
            <div>Apr</div>
            <div>May</div>
            <div>Jun</div>
          </div>
          <div className="gradient">
            <img src={Gradient} alt="gradient" />
          </div>
        </div>

        <div className="order-payments">
          <div className="items">
            <div className="item">
              <span className="title">Orders</span>
              <div className="meter"></div>
              <div>
                Pending Orders : <span className="pending">20</span>
              </div>
              <div>
                Reconciled Orders : <span className="reconcile">80</span>
              </div>
              <div>
                Total Orders : <span className="total">100</span>
              </div>
            </div>
            <div className="item">
              <span className="title">Payments</span>
              <div className="meter"></div>
              <div>
                Pending Payments : <span className="pending">20</span>
              </div>
              <div>
                Reconciled Payments : <span className="reconcile">80</span>
              </div>
              <div>
                Total Payments : <span className="total">100</span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BioGraph;
