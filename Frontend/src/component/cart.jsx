


import React from "react";
import { NavLink } from "react-router-dom";


import img1 from "../assets/item/melon.png";
import img2 from "../assets/item/Coca-Cola.jpg";
import img3 from "../assets/item/kotmale.jpg";
import img4 from "../assets/item/chicken_meat.jpg";
import img5 from "../assets/item/carrot.png";
import img6 from "../assets/item/bread.jpg";
import img7 from "../assets/item/hamburger.jpg";
import img8 from "../assets/item/leena.png";
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
import img24 from "../assets/item/bigonions.png";
import img25 from "../assets/item/parippu.jpg";



const Cart = () => {
    

    return(
        <div>
            <div className="container py-5">
                <div className="row">
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
                    <div className="col-12 text-center">
                        <h1>What are you looking for?</h1>
                        <hr/>
                    </div>
                    <div className="d-flex row justify-content-end p-4 mt-0.10 me-8" >
                        <form class="d-flex gap-3  ">
                            <input class="form-control  rounded-pill" type="search"  aria-describedby="inputGroup-sizing-sm"  placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-warning rounded-pill " type="submit">Search</button>
                        </form>                        
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {/* {DATA.map(cardItem)} */}
               
                    
                                <div class="card my-5 py-4" style={{width: "18rem"}}>
                                <img src={img1} class="card-img-top w-50" alt="..."/>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Melon  </h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1Kg - Rs 250</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>
                        
                       
                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img12} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">School Bag </h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 1500</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img24} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Big Onions</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 KG - Rs 600</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>


                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img21} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Baby Ceremy </h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 450</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>


                                <div class="card my-5 py-4" style={{width: "18rem"}}>
                                <img src={img3} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Kotmale Milk</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 550</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>


                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img4} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Chiken Meat</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 KG - Rs 2500</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>


                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img5} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Carrot</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 KG - Rs 750</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img6} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Bread</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 190</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>


                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img7} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Hamburger</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 750</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img8} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Leena </h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 KG - Rs 750</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img10} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Pine Apple </h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 KG -  Rs 450</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img22} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Orange local </h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 KG - Rs 650</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img15} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Astra</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 KG - Rs 150</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "20rem"}}>
                                <img src={img16} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Araliya </h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">10 KG - Rs 1500</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img17} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Body wash</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 1500</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card  my-5 py-4" style={{width: "18rem"}}>
                                <img src={img18} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Linna</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1Kg - Rs 750</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card my-5 py-4" style={{width: "18rem"}}>
                                <img src={img19} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Cerelac</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 750</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card my-5 py-4" style={{width: "18rem"}}>
                                <img src={img20} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Orange import</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1Kg - Rs 1500</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card my-5 py-4" style={{width: "18rem"}}>
                                <img src={img11} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Sudaya</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 Kg - Rs 1750</small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                                <div class="card my-5 py-4" style={{width: "18rem"}}>
                                <img src={img2} class="card-img-top  w-50" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Coca- Cola</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">1 item - Rs 200 </small>
                                </div>
                                    <NavLink  to={'/cart'} class="btn btn-warning">Add to cart</NavLink>
                                </div>

                               



                        
                    </div>
                
//             </div>
//         </div>

    );
}
export default Cart;



