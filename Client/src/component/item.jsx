import React from "react";
import DATA from "./cart";

const item = () => {
  const cardItem = (item) => {
    return (
      <div class="card mb-4" style={{width: "18rem"}}>
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <a href="#" class="btn btn-outline-primary">
            Buy Now 
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default item;
