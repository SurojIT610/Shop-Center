// src/components/ProductInfo.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ProductInfo.scss';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + amount, 1));
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product__details__text">
      <h3>{product.title}</h3>
      <div className="rating mb-3">
        {Array.from({ length: 5 }, (_, index) => (
          <i key={index} className={`fa fa-star ${index < Math.round(product.rating) ? "checked" : ""}`}></i>
        ))}
        <span> ({product.reviews.length} reviews)</span>
      </div>
      <div className="product__details__price mb-3">
        ${product.price} <span>${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
      </div>
      <p>{product.description}</p>
      <div className="product__details__button mb-4 d-flex align-items-center justify-content-between">
        <div className="quantity d-flex align-items-center">
          <span>Quantity:</span>
          <div className="pro-qty ms-2 d-flex align-items-center">
            <button
              className="btn btn-outline-secondary qtybtn"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="form-control text-center"
              readOnly
            />
            <button
              className="btn btn-outline-secondary qtybtn"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
        <a href="#" className="cart-btn btn btn-dark">
          <span className="icon_bag_alt"></span> Add to cart
        </a>
        <ul className="list-unstyled d-flex">
          <li>
            <a href="#"><span className="icon_heart_alt"></span></a>
          </li>
          <li>
            <a href="#"><span className="icon_adjust-horiz"></span></a>
          </li>
        </ul>
      </div>
      <div className="product__details__widget">
        <ul className="list-unstyled">
          <li className="mb-2">
            <span>Availability:</span>
            <div className="stock__checkbox">
              <label htmlFor="stockin">
                {product.availabilityStatus}
                <input
                  type="checkbox"
                  id="stockin"
                  checked={product.availabilityStatus === 'In Stock'}
                  readOnly
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </li>
          <li className="mb-2">
            <span>Weight:</span>
            <p>{product.weight} kg</p>
          </li>
          <li className="mb-2">
            <span>Dimensions:</span>
            <p>{product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
          </li>
          <li className="mb-2">
            <span>Warranty:</span>
            <p>{product.warrantyInformation}</p>
          </li>
          <li className="mb-2">
            <span>Shipping:</span>
            <p>{product.shippingInformation}</p>
          </li>
          <li className="mb-2">
            <span>Return Policy:</span>
            <p>{product.returnPolicy}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
