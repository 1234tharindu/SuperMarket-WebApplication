import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='warning' className='text-center text-lg-start text-secondary bg-opacity-50'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block fw-bolder'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fa fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fa fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fa fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fa fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fa fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fa fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5 color="dark'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fa fa-gem me-3'></i>Super Fresh 
              </h6>
              <p className="lead fs-8">
              Groceries to your doorstep
              Groceries without stress
              Amazing discount and offers
              
              </p>
              <h6 className='text-uppercase fw-bold mb-4'> MR.Tharindu Darshana Dehipitiya / Miss.Shashini lakshani </h6>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Mongoose
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Express
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Node
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fa fa-home me-3'></i> No: 106/1 Rathnapura Godakawela 
              </p>
              <p>
                <i className='fa fa-envelope me-3'></i>
                superfresh@gmail.com / dehipitiya055@gmail.com
              </p>
              <p>
                <i className='fa fa-phone me-3'></i> + 94 76 83 03 539 / + 76 99 56 486
              </p>
              <p>
                <i className='fa fa-print me-3'></i> + 11 47 93 578
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          WWW.superfresh.lk
        </a>
      </div>
    </MDBFooter>
  );
}
