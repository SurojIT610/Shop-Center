// src/components/ProductDetailSection/RelatedProducts.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper
import '../Components/RelatedProducts.scss';

const RelatedProducts = () => {
  const products = [
    { id: 1, image: 'img/product/related/rp-1.jpg', name: 'Buttons tweed blazer', price: '$ 59.0', status: 'new' },
    { id: 2, image: 'img/product/related/rp-2.jpg', name: 'Flowy striped skirt', price: '$ 49.0' },
    { id: 3, image: 'img/product/related/rp-3.jpg', name: 'Cotton T-Shirt', price: '$ 59.0', status: 'out of stock' },
    { id: 4, image: 'img/product/related/rp-4.jpg', name: 'Slim striped pocket shirt', price: '$ 59.0' }
  ];

  return (
    <>
      {products.map(product => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
          <div className="product__item">
            <div className={`product__item__pic set-bg ${product.status ? product.status : ''}`} style={{ backgroundImage: `url(${product.image})` }}>
              {product.status === 'new' && <div className="label new">New</div>}
              {product.status === 'out of stock' && <div className="label stockout">out of stock</div>}
              <ul className="product__hover">
                <li><a href={product.image} className="image-popup"><span className="arrow_expand"></span></a></li>
                <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                <li><a href="#"><span className="icon_bag_alt"></span></a></li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6><a href="#">{product.name}</a></h6>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="product__price">{product.price}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedProducts;
