import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ProductImageGallery.scss';

const ProductImageGallery = ({ images }) => {
  return (
    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={image} className="d-block w-100" alt={`Product ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Product {index + 1}</h5>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#productCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#productCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li key={index} data-bs-target="#productCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></li>
        ))}
      </ol>
    </div>
  );
};

export default ProductImageGallery;
