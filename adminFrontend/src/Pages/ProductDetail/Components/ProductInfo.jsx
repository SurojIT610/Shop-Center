// src/components/ProductDetailSection/ProductInfo.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper
import './ProductInfo.scss';

const ProductInfo = () => {
  return (
    <div className="product__details__text">
      <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
      <div className="rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <span>( 138 reviews )</span>
      </div>
      <div className="product__details__price">$ 75.0 <span>$ 83.0</span></div>
      <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt.</p>
      <div className="product__details__button">
        <div className="quantity">
          <span>Quantity:</span>
          <div className="pro-qty">
            <span className="dec qtybtn">-</span>
            <input type="text" value="1" />
            <span className="inc qtybtn">+</span>
          </div>
        </div>
        <a href="#" className="cart-btn"><span className="icon_bag_alt"></span> Add to cart</a>
        <ul>
          <li><a href="#"><span className="icon_heart_alt"></span></a></li>
          <li><a href="#"><span className="icon_adjust-horiz"></span></a></li>
        </ul>
      </div>
      <div className="product__details__widget">
        <ul>
          <li>
            <span>Availability:</span>
            <div className="stock__checkbox">
              <label htmlFor="stockin">
                In Stock
                <input type="checkbox" id="stockin" />
                <span className="checkmark"></span>
              </label>
            </div>
          </li>
          <li>
            <span>Available color:</span>
            <div className="color__checkbox">
              <label htmlFor="red">
                <input type="radio" name="color__radio" id="red" defaultChecked />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="black">
                <input type="radio" name="color__radio" id="black" />
                <span className="checkmark black-bg"></span>
              </label>
              <label htmlFor="grey">
                <input type="radio" name="color__radio" id="grey" />
                <span className="checkmark grey-bg"></span>
              </label>
            </div>
          </li>
          <li>
            <span>Available size:</span>
            <div className="size__btn">
              <label htmlFor="xs-btn" className="active">
                <input type="radio" id="xs-btn" />
                xs
              </label>
              <label htmlFor="s-btn">
                <input type="radio" id="s-btn" />
                s
              </label>
              <label htmlFor="m-btn">
                <input type="radio" id="m-btn" />
                m
              </label>
              <label htmlFor="l-btn">
                <input type="radio" id="l-btn" />
                l
              </label>
            </div>
          </li>
          <li>
            <span>Promotions:</span>
            <p>Free shipping</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
