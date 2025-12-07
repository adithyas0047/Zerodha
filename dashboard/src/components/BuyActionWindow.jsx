// dashboard/BuyActionWindow.jsx
import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext); // use the provider value
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBuyClick = async () => {
    setError("");
    setLoading(true);
    try {
      // ensure numbers
      const payload = {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      };

      const res = await axios.post(
        "https://zerodha-mjok.onrender.com/newOrder",
        payload,
        {
          timeout: 5000,
        }
      );
      console.log("Order response:", res.data);

      // use the function obtained from useContext — NOT GeneralContext.closeBuyWindow()
      if (typeof closeBuyWindow === "function") closeBuyWindow();
      else console.warn("closeBuyWindow not available from context");
    } catch (err) {
      console.error("Failed to place order:", err);
      if (err.response) setError(`Server error: ${err.response.status}`);
      else if (err.request)
        setError("No response from server. Is backend running?");
      else setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    if (typeof closeBuyWindow === "function") closeBuyWindow();
    else console.warn("closeBuyWindow not available from context");
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={loading}
          >
            {loading ? "Placing..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>

      {error && (
        <div style={{ color: "red", padding: "8px", fontSize: "0.9rem" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default BuyActionWindow;
