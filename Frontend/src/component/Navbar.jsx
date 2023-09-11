import React from "react";
import { NavLink } from "react-router-dom";


import img from '../assets/item/person1.jpg'




const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light shadow "/>

      <nav class="navbar navbar-expand-lg bg-white py-3
      shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">
           SUPER FRESH
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/Services">
                  Services
                </NavLink>
              </li>



              <li class="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Product
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>


              
            </ul>
           <div className="buttons">
           <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> login</NavLink>
            <NavLink to="/Register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register</NavLink>

            <a href="" className="btn btn-outline-dark ms-2" >
                <i className="fa fa-shopping-cart me-1"></i> Cart(0)</a>

            <NavLink to="/logout" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-out me-1"></i> Logout</NavLink>

            <NavLink to="/Profile" >
            <img src={img} className="App-pic ms-2 me-3 rounded-pill" alt="logo"/>
              </NavLink>

            

           


           </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



