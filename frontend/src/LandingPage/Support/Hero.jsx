function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div id="support-wrapper" className="p-5">
        <h5>Support Portal</h5>
        <a href="" style={{ textDecoration: "none", color: "white" }}>
          Track tickets
        </a>
      </div>
      <div className="row p-2 align-items-start">
        {/*Search for an answer or browser help topics to create a ticket*/}
        <div className="col" style={{ marginLeft: "190px" }}>
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics <br />
            to create a ticket
          </h1>
          <input
            className="input-group rounded form-control mb-2"
            style={{
              width: "500px",
              height: "60px",
              fontSize: "18px",
            }}
            placeholder="Eg: how do i activate F&O, why my order is getting rejected..."
          />
          <a href="" style={{ color: "white" }} className="small p-2">
            Track account opening
          </a>
          <a href="" style={{ color: "white" }} className="small p-2">
            Track segment activation
          </a>
          <a href="" style={{ color: "white" }} className="small p-2">
            Intraday margins
          </a>
          <a href="" style={{ color: "white" }} className="small p-2">
            Kite user manual
          </a>
        </div>
        {/*Featured*/}
        <div className="col mb-5" style={{ marginLeft: "110px" }}>
          <h1 className="fs-4">Featured</h1>
          <ol>
            <li className="p-2">
              <a href="" style={{ color: "white" }}>
                Current Takeovers and Delisitings - January 2024
              </a>
            </li>
            <li className="p-2">
              <a href="" style={{ color: "white" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
        <div className="mb-4"></div>
      </div>
    </section>
  );
}

export default Hero;
