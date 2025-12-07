function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 p-5 ">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-3">
            <a
              href={tryDemo}
              style={{ textDecoration: "none" }}
              className="p-2"
              target="_blank"
            >
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
              className="p-2"
              target="_blank"
            >
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>{" "}
          </div>

          <div>
            <a href={googlePlay} className="p-2" target="_blank">
              <img src="media\images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} className="p-2" target="_blank">
              <img src="media\images\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
