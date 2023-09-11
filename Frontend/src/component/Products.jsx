import React from "react";

import img1 from "../assets/item/melon.png";
import img2 from "../assets/item/Coca-Cola.jpg";
import img3 from "../assets/item/kotmale.jpg";
import img4 from "../assets/item/chicken_meat.jpg";
import img5 from "../assets/item/carrot.png";
import img6 from "../assets/item/bread.jpg";
import img7 from "../assets/item/hamburger.jpg";
import img8 from "../assets/item/leena.png";
//import img9 from "../assets/item/pendol.jpg";
import img10 from "../assets/item/pineapple.png";
import img11 from "../assets/item/sudaya.png";
import img12 from "../assets/item/bag.png";
import img13 from "../assets/item/Air-Wick-Pure-Spring.jpg";
import img14 from "../assets/item/clay.jpg";
import img15 from "../assets/item/Astra.jpg";
import img16 from "../assets/item/araliyaa.jpg";
import img17 from "../assets/item/bodywash.jpg";
import img18 from "../assets/item/linna.png";
import img19 from "../assets/item/cerelac.jpg";
import img20 from "../assets/item/orangeimport.png";
import img21 from "../assets/item/babyceremy.jpg";
import img22 from "../assets/item/orangelocal.png";
//import img23 from "../assets/item/Pandol-Syrup-.jpg";
import img24 from "../assets/item/bigonions.png";
import img25 from "../assets/item/parippu.jpg";

const Cart = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Category
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Vegetables
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Fruits
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Grocery
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              Fish
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              Meat
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              Beverages
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              Household
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              School item
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              Bakery
            </a>
            <a href="#" class="list-group-item list-group-item-action ">
              Pharmacy
            </a>
            
          </div>
          <div className="container my-5 py-5">
            <div class="col">
              <div class="card h-10">
                <img src={img1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Melon</h5>
                </div>
                
              </div>
            </div>

            <div class="col">
              <div class="card h-10">
                <img src={img12} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Bag </h5>
                </div>
                
              </div>
            </div>

            {/* <div class="col">
                            <div class="card h-10">
                            <img src={img13} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">It is only your favorite flower</h5>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-10">
                            <img src={img14} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">It is only your favorite flower</h5>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div> */}
          </div>
        </div>
        <div class="col">
          <div className="container my-5 py-5">
            <div className="row">
              <h1 className="display-4 fw-bolder mb-4 text-center text-black ">
                {" "}
                What are you looking for?
              </h1>
              <div className="d-flex row justify-content-end p-4 mt-0.10 me-8">
                <form class="d-flex gap-3  ">
                  <input
                    class="form-control  rounded-pill"
                    type="search"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <button
                    class="btn btn-outline-warning rounded-pill "
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
              
              <div class="col">
                <div class="card h-50">
                  <img src={img2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Coca-cola </h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Kotmale Milk</h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Chiken Meat</h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Carrot </h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img6} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Bread</h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img7} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Hamburger </h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img8} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Leena </h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img25} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Parippu </h5>
                  </div>
                  
                </div>
              </div>
              <div class="col">
                <div class="card h-50">
                  <img src={img10} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Pineapple </h5>
                  </div>
                  
                </div>
              </div>

              <div class="col">
                <div class="card h-10">
                  <img src={img15} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Astra</h5>
                  </div>
                  
                </div>
              </div>

              <div class="col">
                <div class="card h-10">
                  <img src={img16} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Araliya</h5>
                  </div>
                  
                </div>
              </div>

              <div class="col">
                <div class="card h-10">
                  <img src={img17} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Body wash</h5>
                  </div>
                  
                </div>
              </div>

              <div class="col">
                <div class="card h-10">
                  <img src={img18} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Linna</h5>
                  </div>
                  
                </div>
              </div>

              <div class="col">
                <div class="card h-10">
                  <img src={img19} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Cerelac</h5>
                  </div>
                  
                </div>
              </div>

              <div class="col">
                <div class="card h-10">
                  <img src={img20} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Orange</h5>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
