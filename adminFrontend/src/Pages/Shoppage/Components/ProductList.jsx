// src/components/ProductList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.scss';

const ProductList = ({ products, onAddToCart }) => {
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  const navigate = useNavigate();

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProductClick = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  const handleQuantityChange = (productId, amount) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) + amount, 1)
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="col-lg-9 col-md-9">
      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <div className="product__item" onClick={() => handleProductClick(product.id)}>
                <div
                  className="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${product.images[0] || 'https://via.placeholder.com/300'})` }}
                >
                  {product.label && <div className={`label ${product.label.toLowerCase()}`}>{product.label}</div>}
                  <div className="product__item__hover">
                    <ul>
                      <li><a href="#" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}><span className="icon_cart_alt"></span></a></li>
                      <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                      <li><a href="#"><span className="icon_expand_alt"></span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6><a href="#">{product.title}</a></h6>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fa fa-star${i < Math.round(product.rating) ? '' : '-o'}`}></i>
                    ))}
                  </div>
                  <div className="product__price">
                    ${product.price} {product.discountPercentage > 0 && <span>${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-lg-12 text-center">No products found</div>
        )}
      </div>
      {totalPages > 1 && (
        <div className="col-lg-12 text-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                >
                  <i className="fas fa-angle-left"></i>
                </a>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                >
                  <i className="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProductList;
