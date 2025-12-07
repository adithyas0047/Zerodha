function Pricing() {
  return (
    <div className="container me-5 px-4 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mt-2">
            See Pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1>₹0</h1>
              <p className="mt-3">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1>₹20</h1>
              <p className="mt-4">Intraday and F&O</p>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
