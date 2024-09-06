// src/components/ProductTabs.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ProductTabs.scss';

const ProductTabs = ({ product }) => {
  return (
    <div className="product__details__tab">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#tabs-1" role="tab">Description</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="review-tab" data-bs-toggle="tab" href="#tabs-2" role="tab">Reviews</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tabs-1" role="tabpanel">
          <p>{product.description}</p>
        </div>
        <div className="tab-pane fade" id="tabs-2" role="tabpanel">
          {product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="review-item">
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className={`fa fa-star ${i < review.rating ? "checked" : ""}`}></i>
                  ))}
                </div>
                <p>{review.comment}</p>
                <small>Reviewed by {review.reviewerName} on {new Date(review.date).toLocaleDateString()}</small>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
