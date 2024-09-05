import React from 'react';
import './productsection.scss';

import '@fortawesome/fontawesome-free/css/all.min.css';


const Products = () => {
  return (

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>New Products</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls">
                <li className="active" data-filter="*">All</li>
                <li data-filter=".women">Women’s</li>
                <li data-filter=".men">Men’s</li>
                <li data-filter=".kid">Kid’s</li>
                <li data-filter=".accessories">Accessories</li>
                <li data-filter=".cosmetic">Cosmetics</li>
                <li data-filter=".electronics">Electronics</li>
              </ul>
            </div>
          </div>
          <div className="row product__filter">
            {/* Example of a product item */}
            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
              <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: 'url(../../assets/img/product/product-1.jpg)' }}>
                  <ul className="product__item__pic__hover">
                    <li><a href="#"><i className="fas fa-cart-plus"></i></a></li>
                    <li><a href="#"><i className="fas fa-heart"></i></a></li>
                    <li><a href="#"><i className="fas fa-search-plus"></i></a></li> {/* Search icon */}
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">Lightweight Jacket</a></h6>
                  <h5>$59.00</h5>
                </div>
              </div>
            </div>
            {/* Repeat product items as needed */}
          </div>
        </div>
      </section>

  );
};

export default Products;
