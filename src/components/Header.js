import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Nofit } from "../assets/Group.svg";
import { ReactComponent as Search } from "../assets/Search.svg";
import Picture from "../assets/IMG-20180413-WA0005.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-items">
          <div className="logo-search">
            <h1>TransMonitor</h1>
            <div className="search">
              <Search />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <ul>
            <li>
              {" "}
              <Link to="/">Support</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">FAQ</Link>{" "}
            </li>
            <li>
              <Nofit />{" "}
            </li>
            <div className="profile">
              <div>
                <span>Hello</span>
                <span>Oluwaleke Ojo</span>
              </div>
              <img src={Picture} alt="pic" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
