// src/components/RelatedProducts.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper
import './RelatedProducts.scss'; // Import SCSS for styling

// Import images
import relatedProduct1 from '../../../assets/img/product/related/rp-1.jpg';
import relatedProduct2 from '../../../assets/img/product/related/rp-2.jpg';
// Import more images as needed

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <div className="related__product__item">
        <img src={relatedProduct1} alt="Related Product 1" className="img-fluid" />
        <h5>Product Name 1</h5>
        <div className="product__price">$50.00</div>
      </div>
      <div className="related__product__item">
        <img src={relatedProduct2} alt="Related Product 2" className="img-fluid" />
        <h5>Product Name 2</h5>
        <div className="product__price">$60.00</div>
      </div>
      {/* Add more related product items here */}
    </div>
  );
};

export default RelatedProducts;
