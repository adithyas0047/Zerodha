import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">404 Not Found</h1>
        <p className="text-muted">
          The Page you are looking for is does not exist.
        </p>
        <Link to="/">
          <button
            className="btn btn-primary mt-3 mb-5"
            style={{ width: "15%", margin: "0 auto" }}
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
