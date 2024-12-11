import React, { useState } from 'react';
export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="site-footer bg-light">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="line-top">About</h3>
                <p className="mb-5">
                  Delectus voluptatum distinctio quos eius excepturi sunt
                  pariatur, aut, doloribus officia ea molestias beatae laudantium,
                  quam odio ipsum veritatis est maiores velit quasi blanditiis et
                  natus accusamus itaque. Veniam quidem debitis odio amet voluptas
                  distinctio dicta placeat! Et pariatur doloremque ea veniam.
                  Separated they live.
                </p>
              </div>
              <div className="widget">
                <h3 className="line-top">Connect with us</h3>
                <ul className="social list-unstyled">
                  <li>
                    <a href="#"><span className="icon-facebook"></span></a>
                  </li>
                  <li>
                    <a href="#"><span className="icon-twitter"></span></a>
                  </li>
                  <li>
                    <a href="#"><span className="icon-instagram"></span></a>
                  </li>
                  <li>
                    <a href="#"><span className="icon-dribbble"></span></a>
                  </li>
                  <li>
                    <a href="#"><span className="icon-linkedin"></span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="widget">
                    <h3 className="line-top">Navigations</h3>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <div className="widget">
                    <ul className="links list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Work</a></li>
                      <li><a href="#">Process</a></li>
                      <li><a href="#">About Us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <div className="widget">
                    <ul className="links list-unstyled">
                      <li><a href="#">Press</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <div className="widget">
                    <ul className="links list-unstyled">
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Process</a></li>
                      <li><a href="#">About Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center text-center copyright">
            <div className="col-md-8">
              <p className="small text-black-50">
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed By Soubhagya
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the loader and overlayer based on isLoading */}
      {isLoading && (
        <>
          <div id="overlayer" className="overlayer-active"></div>
          <div className="loader">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}

      
    </div>
  );
}
