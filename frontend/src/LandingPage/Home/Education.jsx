function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="row text-center ms-5">
            <img
              src="media\images\education.svg"
              style={{ width: "70%" }}
              alt="varsity education"
            />
          </div>
        </div>
        <div className="col-6">
          <h1 className="mt-5 mb-4">Free and open market education</h1>
          <p className="text-muted mb-2">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
