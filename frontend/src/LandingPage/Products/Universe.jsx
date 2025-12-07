function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <p className="fs-5 mb-5 p-5">
          Want to know more about our technology stack? Check out the
          <a
            href="https://zerodha.tech/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="mt-2 text-muted fs-6 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        {/*Zerodha universe images --> (blocks of 6)*/}
        <div className="col p-3 mb-3">
          <img src="media\images\smallcaseLogo.png" alt="" />
          <p className="text-small text-muted text-center mt-2">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on EFTs.
          </p>
          <img
            src="media\images\zerodhaFundhouse.png"
            alt=""
            className="mt-5"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted text-center mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-3 mb-3">
          <img
            src="media\images\sensibullLogo.svg"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted text-center mt-2">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            src="media\images\streakLogo.png"
            alt=""
            className="mt-5"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted text-center mt-2">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col p-3 mb-3">
          <img
            src="media\images\dittoLogo.png"
            alt=""
            style={{ width: "30%" }}
          />
          <p className="text-small text-muted text-center mt-2">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
          <img
            src="media\images\goldenpiLogo.png"
            alt=""
            className="mt-5"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted text-center mt-2">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="text-center">
        <button
          style={{ width: "15%", margin: "0 auto" }}
          className="btn btn-primary mb-5"
        >
          Sign up for free
        </button>
      </div>
      <div className="mb-3"></div>
    </div>
  );
}

export default Universe;
