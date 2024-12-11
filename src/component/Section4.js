import React from 'react'

function Section4() {
  return (
    <div className="sec-3 section bg-light" data-aos="flip-left">
		<div className="container">
			<div className="row">
				<div className="col-lg-5">
					<h2 className="heading">Our Services</h2>
					<p className="col-lg-12">We provide comprehensive architectural,
                         interior design, and landscape services to transform spaces into functional 
                         and aesthetically pleasing environments. Our architectural expertise includes
                          concept design, detailed planning, and project management, ensuring every project meets the highest standards of quality and precision. In interior design, we focus on creating harmonious spaces through thoughtful layouts, material selection, and custom 
                          furniture solutions, bringing your vision to life. Our landscape services enhance outdoor spaces with innovative designs that integrate hardscapes, lush greenery, and sustainable features. From initial concept to final execution, our multidisciplinary approach ensures seamless collaboration and exceptional results for every project.</p>
				</div>

				<div className="col-lg-7 ms-auto">
					<div className="accordion accordion-flush accordion-1" id="accordionFlushExample">
						
						<div className="accordion-item" >
							<h2 className="accordion-header" id="flush-headingOne">
								<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
									Architecture Design
								</button>
							</h2>
							<div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<div className="row justify-content-between">
										<div className="col-md-6">
											<img src="./image/3d.jpg" alt="Image" className="img-fluid"/>
										</div>
										<div className="col-md-6">
											<p>Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio.</p>
											<a href="#" className="more-2">Learn more <span className="icon-arrow_forward"></span></a>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingFour">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
									Interior Design
								</button>
							</h2>
							<div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<div className="row justify-content-between">
										<div className="col-md-6">
											<img src="./image/interior-design.jpg" alt="Image" className="img-fluid"/>
										</div>
										<div className="col-md-6">
											<p>Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio.</p>
											<a href="#" className="more-2">Learn more <span className="icon-arrow_forward"></span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingTwo">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
									Landscape Design
								</button>
							</h2>
							<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<div className="row justify-content-between">
										<div className="col-md-6">
											<img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
										</div>
										<div className="col-md-6">
											<p>Delectus voluptatum distinctio quos eius excepturi sunt pariatur, aut, doloribus officia ea molestias beatae laudantium, quam odio ipsum veritatis est maiores velit quasi blanditiis et natus accusamus itaque. Veniam quidem debitis odio amet voluptas distinctio.</p>
											<a href="#" className="more-2">Learn more <span className="icon-arrow_forward"></span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						

						

					</div>
				</div>
			</div>
		</div>
        </div>
  )
}
export default Section4;
