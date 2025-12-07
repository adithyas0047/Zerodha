function Brokerage() {
  return (
    <div className="container border-top p-5">
      <div className="row">
        <div className="col">
          <h1 className="text-center fs-3 mb-4" style={{ color: "#387ED1" }}>
            Brokerage Calculator
          </h1>
          <ul className="text-muted medium">
            <li className="mb-2">
              Call & Trade and RMS auto-squaredoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-2">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col">
          <h1 className="text-center fs-3" style={{ color: "#387ED1" }}>
            List of Charges
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
