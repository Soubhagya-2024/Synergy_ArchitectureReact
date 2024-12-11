import React from 'react';

export default function News() {
  return (
    <div className="section sec-news">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <h2 className="heading">News</h2>
          </div>
          <div className="col-lg-6">
            <p>
              Delectus voluptatum distinctio quos eius excepturi sunt pariatur,
              aut, doloribus officia ea molestias beatae laudantium, quam odio
              ipsum veritatis est maiores velit quasi blanditiis et natus
              accusamus itaque.
            </p>
          </div>
        </div>

        <div className="row">
          {/* First Post */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="post-entry-1 h-100">
              <a href="single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              </a>
              <div className="post-entry-1-contents">
                <span className="meta d-inline-block mb-0">
                  July 17, 2019 <span className="mx-2">by</span>
                  <a href="#">Admin</a>
                </span>
                <h2 className="mb-3">
                  <a href="single.html">How Awesome Stay connected</a>
                </h2>

                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="single.html">Read more</a></p>
              </div>
            </div>
          </div>

          {/* Second Post */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="post-entry-1 h-100">
              <a href="single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              </a>
              <div className="post-entry-1-contents">
                <span className="meta d-inline-block mb-0">
                  July 17, 2019 <span className="mx-2">by</span>
                  <a href="#">Admin</a>
                </span>
                <h2 className="mb-3">
                  <a href="single.html">We Need Unlimitted People</a>
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="single.html">Read more</a></p>
              </div>
            </div>
          </div>

          {/* Third Post */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="post-entry-1 h-100">
              <a href="single.html">
              <img src="../image/landscape.jpg" alt="Image" className="img-fluid"/>
              </a>
              <div className="post-entry-1-contents">
                <span className="meta d-inline-block mb-0">
                  July 17, 2019 <span className="mx-2">by</span>
                  <a href="#">Admin</a>
                </span>
                <h2 className="mb-3">
                  <a href="single.html">Importance of Getting Notifications</a> {/* Updated title for clarity */}
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p><a href="single.html">Read more</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
