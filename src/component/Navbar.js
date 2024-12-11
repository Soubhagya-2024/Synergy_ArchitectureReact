
import '../css/style.css';  
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
//for aos
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Navbar(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div>
      <nav className="site-nav site_navbar">
        <div className="nav_logo">
          <div
            style={{
              position: 'absolute',
              top: '20px',  
              left: '50px',  
              borderBottomRightRadius: '40px',
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
          >
            <a href="#" className="logo m-0 float-start">
              <img src="./image/SRD_Logo.png" alt="SRD_Logo" className="logo" />
            </a>
          </div>
        </div>

        <div className="container">
          <div className="site-navigation">
            <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start">
              <li className="active">
              <Link to="/">Home</Link>

              </li>
              <li className="has-children">
              <Link to="/">Projects</Link>
                <ul className="dropdown">
                  <li>
                    <Link to ="">Commercial Project</Link>
                  </li>
                  <li>
                    <a href="#">Landscape Design</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Residential project</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
              <Link to="/about">About</Link>

              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      <div className="hero-2 overlay" style={{ backgroundImage: 'url("/image/backgroundimage.webp")' }}>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 mx-auto">
              <h1 className="mb-10" data-aos="fade-down-left">
                <span>{props.span1}</span>
                <span className="d-block">{props.span2} </span>
                <span className="d-block">{props.span4}</span>
              </h1>
            </div>
          </div>

        

          <div className="intro-desc" data-aos="fade-down-left">
            <div className="line"></div>
            <p style={{ color: 'white' }}>
              {props.span5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Default props set here
Navbar.defaultProps = {
  span1: "set span1 here",
  span2: "set span2 here",
  span4: "set span4 here",
  span5: "set span5 longline here"
};

export default Navbar;
