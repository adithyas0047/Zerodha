function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top">
        <h1 className="text-center fs-2">People</h1>
      </div>

      <div
        className="row text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 text-center mb-5">
          <img
            className="mb-3"
            src="media\images\nithinKamath.jpg"
            alt="nithin kamath"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-2">Nithin Kamath</h4>
          <h5 className="text-muted fs-6">Founder, CEO</h5>
        </div>
        <div className="col-6 p-5 ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen</p>
          <p>
            Connect on{" "}
            <a
              href="https://nithinkamath.me/"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/u/nithin/summary"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/Nithin0dha"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              X
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
