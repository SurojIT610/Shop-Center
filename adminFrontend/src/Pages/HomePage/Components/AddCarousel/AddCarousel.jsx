import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../assets/css/AddCarousel.scss';
import bannerImage from '../../../../assets/img/banner/banner-1.jpg'; // Adjust the path as needed

const AddCarousel = () => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 m-auto">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="banner__item">
                    <div className="banner__text">
                      <span>The Chloe Collection</span>
                      <h1>The Project Jacket</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="banner__item">
                    <div className="banner__text">
                      <span>The Chloe Collection</span>
                      <h1>The Project Jacket</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="banner__item">
                    <div className="banner__text">
                      <span>The Chloe Collection</span>
                      <h1>The Project Jacket</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCarousel;
