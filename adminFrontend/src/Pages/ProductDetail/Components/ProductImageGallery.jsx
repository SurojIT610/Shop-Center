// src/components/ProductDetailSection/ProductImageGallery.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper

import './ProductImageGallery.scss';

const ProductImageGallery = () => {
  return (
    <div className="product__details__pic">
      <div className="product__details__pic__left product__thumb nice-scroll" tabIndex="1">
        <a className="pt" href="#product-1">
          <img src="img/product/details/thumb-1.jpg" alt="" />
        </a>
        <a className="pt" href="#product-2">
          <img src="src/assets/img/product/details/thumb-2.jpg" alt="" />
        </a>
        <a className="pt" href="#product-3">
          <img src="src/assets/img/product/details/thumb-3.jpg" alt="" />
        </a>
        <a className="pt active" href="#product-4">
          <img src="src/assets/img/product/details/thumb-4.jpg" alt="" />
        </a>
      </div>
      <div className="product__details__slider__content">
        <div className="product__details__pic__slider owl-carousel owl-loaded">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item">
                <img data-hash="product-1" className="product__big__img" src="src/assets/img/product/details/product-1.jpg" alt="" />
              </div>
              <div className="owl-item">
                <img data-hash="product-2" className="product__big__img" src="src/assets/img/product/details/product-2.jpg" alt="" />
              </div>
              <div className="owl-item">
                <img data-hash="product-3" className="product__big__img" src="src/assets/img/product/details/product-3.jpg" alt="" />
              </div>
              <div className="owl-item active">
                <img data-hash="product-4" className="product__big__img" src="src/assets/img/product/details/product-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <button type="button" role="presentation" className="owl-prev"><i className="arrow_carrot-left"></i></button>
            <button type="button" role="presentation" className="owl-next disabled"><i className="arrow_carrot-right"></i></button>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
