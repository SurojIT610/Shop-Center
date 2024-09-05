import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ProductInfo.scss';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Fallback values to avoid errors if product is not defined or missing properties
  const colors = product?.colors || [];
  const sizes = product?.sizes || [];

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
    return <div>Loading...</div>; // Handle loading or empty state
  }

  return (
    <div className="product__details__text">
      <h3>{product.name} <span>Brand: {product.brand}</span></h3>
      <div className="rating mb-3">
        {Array.from({ length: 5 }, (_, index) => (
          <i key={index} className={`fa fa-star ${index < Math.round(product.rating) ? "checked" : ""}`}></i>
        ))}
        <span> ({product.rating} reviews)</span>
      </div>
      <div className="product__details__price mb-3">
        ${product.price} <span>${(product.price * 1.1).toFixed(2)}</span>
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
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                <input
                  type="checkbox"
                  id="stockin"
                  checked={product.stock > 0}
                  readOnly
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </li>
          <li className="mb-2">
            <span>Available color:</span>
            <div className="color__checkbox">
              {colors.length > 0 ? (
                colors.map(color => (
                  <label key={color} className={selectedColor === color ? 'active' : ''}>
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => handleColorChange(color)}
                    />
                    <span style={{ backgroundColor: color }} className="checkmark"></span>
                  </label>
                ))
              ) : (
                <p>No colors available</p>
              )}
            </div>
          </li>
          <li className="mb-2">
            <span>Available size:</span>
            <div className="size__btn">
              {sizes.length > 0 ? (
                sizes.map(size => (
                  <label key={size} className={selectedSize === size ? 'active' : ''}>
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => handleSizeChange(size)}
                    />
                    {size}
                  </label>
                ))
              ) : (
                <p>No sizes available</p>
              )}
            </div>
          </li>
          <li className="mb-2">
            <span>Promotions:</span>
            <p>{product.warranty}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
