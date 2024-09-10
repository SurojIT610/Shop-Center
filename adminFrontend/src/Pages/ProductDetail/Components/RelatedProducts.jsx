import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './RelatedProducts.scss';

const RelatedProducts = ({ products, onAddToCart }) => {
  const handleAddToCartClick = (product) => {
    onAddToCart(product);
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.title} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'Cool',
      confirmButtonColor: '#3085d6',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://cdn.dribbble.com/users/487306/screenshots/2663142/_______.gif")
        center top
        no-repeat
      `
    });
  };

  return (
    <div className="related-products">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="related__product__item">
            <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.thumbnail} alt={product.title} className="img-fluid" />
              <h5>{product.title}</h5>
              <div className="product__price">${product.price}</div>
            </Link>
            <button
              className="btn-add-to-cart"
              onClick={() => handleAddToCartClick(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p>No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
