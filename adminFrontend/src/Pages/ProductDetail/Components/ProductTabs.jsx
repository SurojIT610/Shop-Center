import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ProductTabs.scss';

const ProductTabs = () => {
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dui ac libero facilisis accumsan. Nulla facilisi.</p>
        </div>
        <div className="tab-pane fade" id="tabs-2" role="tabpanel">
          <p>No reviews yet.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
