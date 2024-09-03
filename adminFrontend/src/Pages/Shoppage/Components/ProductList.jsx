// ProductList.js

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper
import React from 'react';
import './ProductList.scss';

const products = [
  { id: 1, name: 'Furry hooded parka', price: 59, image: 'shop-1.jpg', label: 'New' },
  { id: 2, name: 'Flowy striped skirt', price: 49, image: 'shop-2.jpg' },
  { id: 3, name: 'Croc-effect bag', price: 59, image: 'shop-3.jpg' },
  { id: 4, name: 'Dark wash Xavi jeans', price: 59, image: 'shop-4.jpg' },
  { id: 5, name: 'Ankle-cuff sandals', price: 49, originalPrice: 59, image: 'shop-5.jpg', label: 'Sale' },
  { id: 6, name: 'Contrasting sunglasses', price: 59, image: 'shop-6.jpg' },
  { id: 7, name: 'Circular pendant earrings', price: 59, image: 'shop-7.jpg' },
  { id: 8, name: 'Cotton T-Shirt', price: 59, image: 'shop-8.jpg', label: 'Out Of Stock' },
  { id: 9, name: 'Water resistant zips backpack', price: 49, originalPrice: 59, image: 'shop-9.jpg', label: 'Sale' },
];

const ProductList = () => {
  return (
    <div className="col-lg-9 col-md-9">
      <div className="row">
        {products.map(product => (
          <div className="col-lg-4 col-md-6" key={product.id}>
            <div className={`product__item ${product.label ? product.label.toLowerCase() : ''}`}>
              <div className="product__item__pic set-bg" style={{ backgroundImage: `url(img/shop/${product.image})` }}>
                {product.label && <div className={`label ${product.label.toLowerCase()}`}>{product.label}</div>}
                <ul className="product__hover">
                  <li><a href={`img/shop/${product.image}`} className="image-popup"><span className="arrow_expand"></span></a></li>
                  <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                  <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6><a href="#">{product.name}</a></h6>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </div>
                <div className="product__price">
                  ${product.price} {product.originalPrice && <span>${product.originalPrice}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-12 text-center">
          <div className="pagination__option">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#"><i className="fa fa-angle-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
