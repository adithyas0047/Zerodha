function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 ">
        <h1>Charges</h1>
        <p className="text-muted fs-5">List of all charges and taxes</p>
      </div>
      <div className="row p-5">
        <div className="col text-center">
          <img
            src="media\images\pricing0.svg"
            alt="pricing 0"
            style={{ width: "80%" }}
          />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="fs-6 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media\images\intradayTrades.svg"
            alt="intraday trades"
            style={{ width: "80%" }}
          />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="fs-6 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media\images\pricingMF.svg"
            alt="free direct MF"
            style={{ width: "80%" }}
          />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="fs-6 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
