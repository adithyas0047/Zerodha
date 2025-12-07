function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row ">
        {/* First column --> Data */}
        <div className="col-6 p-5 mt-5">
          {/* Product name and product description */}
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          {/* Learn more */}
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Second column --> Image */}
        <div className="col-6 ">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
