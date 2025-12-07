function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largest broker" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-5 mb-3">Largest Stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivation</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <li>
                <p>Stocks and IPOs</p>
              </li>
              <li>
                <p>Direct Mutual Funds</p>
              </li>
              <li>
                <p>Bonds and Govt. Securities </p>
              </li>
            </div>
            <img
              src="media\images\pressLogos.png"
              style={{ width: "90%" }}
              alt="press logos"
              className="mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
