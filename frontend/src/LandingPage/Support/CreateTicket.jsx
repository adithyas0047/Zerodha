function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="p-5">
          <h1 className="fs-3">To create a ticket, select a relevant topic</h1>
        </div>
        <div className="col ms-5">
          {/*Account Opening */}
          <div>
            <h3 className="mb-3 fs-5">
              <i
                class="fa-solid fa-circle-plus"
                style={{ fontSize: "13px" }}
              ></i>{" "}
              Account Opening
            </h3>
            <ul
              style={{ listStyleType: "none", paddingLeft: 0 }}
              className="mb-5"
            >
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Online Account Opening
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Offline Account Opening
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Company, partnership and HUF Account Opening
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  NRI Account Opening
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Charges at Zerodha
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Zerodha IDFC FIRST Bank 3-in-1 Account
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
          {/*Kite */}
          <div>
            <h3 className="mb-3 fs-5">
              <i class="fa-brands fa-uikit"></i> Kite
            </h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  IPO
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Trading FAQs
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Margin Trading Facility (MTF) and Margins
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Charts and orders
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Alerts and Nudges
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  General
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          {/*Your Zerodha Account */}
          <div>
            <h3 className="mb-3 fs-5">
              <i class="fa-regular fa-user" style={{ fontSize: "18px" }}></i>{" "}
              Your Zerodha Account
            </h3>
            <ul
              style={{ listStyleType: "none", paddingLeft: 0 }}
              className="mb-5"
            >
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Login Credentials
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Account modification and Segment Addition
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  DP ID and Bank details
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Your profile
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Transfer and Conversion of shares
                </a>
              </li>
            </ul>
          </div>
          {/*Funds */}
          <div style={{ marginTop: "125px" }}>
            <h3 className="mb-3 fs-5">
              <i
                class="fa-solid fa-money-bill-wave"
                style={{ fontSize: "18px" }}
              ></i>{" "}
              Funds
            </h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Add money
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Withdraw money
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Add bank accounts
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  eMandates
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          {/*Your Zerodha Account - statistics */}
          <div className="mb-5">
            <h3 className="mb-3 fs-5">
              <i
                class="fa-solid fa-chart-column"
                style={{ fontSize: "20px" }}
              ></i>{" "}
              Your Zerodha Account
            </h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Margin/leverage, Product and Order types
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Kite Web and Mobile
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Trading FAQs
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Corporate Actions
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Sentinel
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Kite API
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Pi and other platforms
                </a>
              </li>
            </ul>
          </div>
          {/*Console*/}
          <div>
            <h3 className="mb-3 fs-5">
              <i class="fa-solid fa-terminal" style={{ fontSize: "20px" }}></i>{" "}
              Console
            </h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Portfolio
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Portfolio Corporate actions
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Funds statement
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Reports
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Profile
                </a>
              </li>
              <li className="p-2">
                <a href="" style={{ textDecoration: "none" }}>
                  Segments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
