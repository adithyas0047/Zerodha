// dashboard/WatchList.jsx
import React, { useState, useContext } from "react";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext"; // <-- default import (fixed)

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 10)",
          "rgba(54, 162, 235, 10)",
          "rgba(255, 206, 86, 10)",
          "rgba(75, 192, 192, 10)",
          "rgba(153, 102, 255, 10)",
          "rgba(255, 159, 64, 10)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}</span>
      </div>

      {/* Debug button to open the buy window (only for local testing) */}
      {/* <WatchListDebug /> */}

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

/* ---------------------- WatchListItem ---------------------- */
const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = () => setShowWatchListActions(true);
  const handleMouseExit = () => setShowWatchListActions(false);

  return (
    <div>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchListActions && <WatchListActions uid={stock.name} />}
      </li>
    </div>
  );
};

/* ---------------------- WatchListActions (uses context) ---------------------- */
const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext) || {};

  const onBuy = () => {
    if (typeof openBuyWindow === "function") {
      openBuyWindow(uid);
      console.log("[WatchListActions] openBuyWindow called for", uid);
    } else {
      console.warn(
        "[WatchListActions] openBuyWindow is not available in context"
      );
      alert("Buy action is not available — context not provided.");
    }
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={onBuy}>
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

/* ---------------------- Debug helper (rendered inside WatchList) ---------------------- */
// const WatchListDebug = () => {
//   const { openBuyWindow } = useContext(GeneralContext) || {};
//   return (
//     <div style={{ padding: 10 }}>
//       <button
//         onClick={() => {
//           console.log("[WatchListDebug] openBuyWindow:", typeof openBuyWindow);
//           if (typeof openBuyWindow === "function") openBuyWindow("DEBUG-TCS");
//           else
//             alert("openBuyWindow not available in context (check provider).");
//         }}
//         style={{
//           padding: "6px 10px",
//           background: "#4184f3",
//           color: "#fff",
//           border: "none",
//           borderRadius: 4,
//           marginBottom: 8,
//         }}
//       >
//         Open Buy Window (debug)
//       </button>
//     </div>
//   );
// };
