import React from "react";

import { ReactComponent as ArrowDown } from "../assets/Arrow-down.svg";

const Table = () => {
  return (
    <div className="payment-table">
      <table>
        <tbody>
          <tr>
            <th>Item Type</th>
            <th>Price</th>
            <th>Transaction No</th>
            <th colSpan="3">Time</th>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="green">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="yellow">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="green">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="green">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="yellow">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="green">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="green">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="gray">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
          <tr>
            <td>
              <span>VW</span> Apple Mac Book 15" 250 SSD 12GB
            </td>
            <td>$73430</td>
            <td>1234567890</td>
            <td>12:30</td>
            <td className="recorded">
              <div className="yellow">
                <span></span> <span> Recorded </span>
              </div>
            </td>
            <td>
              <ArrowDown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
