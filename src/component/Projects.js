import React from 'react';

import '../css/projects.css';
function Projects() {
  return (
    <div>
      <div className="section sec-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <h2 className="heading">Projects</h2>
            </div>
            <div className="col-lg-6">
              <p>
                Our goal is to create not just buildings or rooms, but experiences—spaces that nurture the spirit, harmonize with the environment, and inspire well-being. Whether through the architectural form, the landscape around it, or the interior design within, we believe that great design has the power to uplift and transform lives.
                Let us help you design a space that reflects your highest aspirations, balancing the physical and spiritual aspects of your life.
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="row g-4">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="single-portfolio">
            <a href="project-single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              <div className="contents">
                <h3>Project One</h3>
                <div className="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="single-portfolio">
            <a href="project-single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              <div className="contents">
                <h3>Project Two</h3>
                <div className="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="single-portfolio">
            <a href="project-single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              <div className="contents">
                <h3>Project One</h3>
                <div className="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="single-portfolio">
            <a href="project-single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              <div className="contents">
                <h3>Project One</h3>
                <div className="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="single-portfolio">
            <a href="project-single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              <div className="contents">
                <h3>Project Two</h3>
                <div className="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <div className="single-portfolio">
            <a href="project-single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              <div className="contents">
                <h3>Project One</h3>
                <div className="cat">Construction</div>
              </div>
            </a>
          </div>
        </div>
      
      </div>
        <div className="col-md-12 text-center mt-5">
          <p><a href="#" className="btn btn-primary me-4">See all projects</a></p>
        </div>
      </div>
    
  );
}

export default Projects;
