import React from "react";
import Products from "./Products";
import pic from '../assets/pic.jpg';
import Contact from "./contact";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src={pic} class="card-img" alt="..."/>
        <div class="card-img-overlay justify-content-left
        ">
          {/* <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
          
          <button class="btn btn-outline-warning ms-2 px-4 rounded-pill justify-content-center" >learn More</button>
          <button class="btn btn-outline-warning ms-2 px-4 rounded-pill justify-content-center" >Shop Now</button> */}
          
        </div>
      </div>
      <About/>
      <Contact/>
    </div>

   );
};
export default Home;
