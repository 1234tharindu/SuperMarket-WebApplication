import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-3 py-3" >
            <div className="row">
            <div className="col-md-6">
            <img src="/assets/about.png"alt="About" className="w-75 mt-5 "/>
            </div> 
            <div className="col-md-6">
                <h3 className="fs-5">About Us</h3>
                <h1 className="display-6">Who <b>We </b>Are</h1>
                <hr/>
                <p className="lead">Super fresh online is the E-commerce platfrom of the superfresh group.It is proudly sri lankan,owned and operated over
                    the last 10 years,delivering the freshest quality productes,along with great value,serving thousands of sri lankan every day.</p>
                <p className="lead">The platfrom enables consumers in sri lanka to order and enjoy a hassle- free delivery to one's door step.Customers can select
                     from a diverse range of products acrossfrozen,chilled and ambient temperatures.Such goods include fresh vegetables,fruits,fish,
                     meat,dairt items , poultry and pharmacy items.</p>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};
export default About; 