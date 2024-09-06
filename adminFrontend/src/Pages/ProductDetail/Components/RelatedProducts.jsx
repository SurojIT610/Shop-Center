// src/components/RelatedProducts.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './RelatedProducts.scss';

const RelatedProducts = ({ products }) => {
  return (
    <div className="related-products">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="related__product__item">
            <img src={product.thumbnail} alt={product.title} className="img-fluid" />
            <h5>{product.title}</h5>
            <div className="product__price">${product.price}</div>
          </div>
        ))
      ) : (
        <p>No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
