import React, { useEffect } from 'react';
import '../css/Testimonal.css';  // Correct path for your file structure

 // This works if your Testimonial.css is in /src/css
 
import { tns } from 'tiny-slider/src/tiny-slider';

export default function Testimonial() {
  useEffect(() => {
    tns({
      container: '#testimonial-center',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      nav: true,
      controls: true,
      prevButton: '.prev',
      nextButton: '.next',
      autoplayButtonOutput: false,
    });
  }, []);

  return (
    <div>
      <div className="sec-4 section bg-light">
        <div className="text-center mb-5">
          <h2 className="heading mb-5 text-center">Testimonial</h2>
        </div>
        <div className="testimonial-slide-center-wrap" data-aos="fade-up" data-aos-delay="100">
          <div id="testimonial-nav">
            <span className="prev" data-controls="prev">
              <span className="icon-chevron-left"></span>
            </span>

            <span className="next" data-controls="next">
              <span className="icon-chevron-right"></span>
            </span>
          </div>

          <div className="testimonial-slide-center testimonial-center" id="testimonial-center">
            {/* Testimonial Item 1 */}
            <div className="item">
              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="testimonial-author mb-5">
                  <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
                    <strong className="d-block">James Campbell</strong>
                    <span>CEO, Co-Founder</span>
                  </div>
                  <blockquote>
                    Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio dicta placeat! Et pariatur doloremque ea veniam.
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Testimonial Item 2 */}
            <div className="item">
              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="testimonial-author mb-5">
                  <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
                    <strong className="d-block">Sarah Johnson</strong>
                    <span>CTO, Co-Founder</span>
                  </div>
                  <blockquote>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Testimonial Item 3 */}
            <div className="item">
              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="testimonial-author mb-5">
                  <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
                    <strong className="d-block">Michael Lee</strong>
                    <span>Lead Developer</span>
                  </div>
                  <blockquote>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
