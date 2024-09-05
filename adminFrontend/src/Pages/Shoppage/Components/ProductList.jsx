import React, { useState, useEffect } from 'react';
import './ProductList.scss';

// Import images
import img1 from '../../../assets/img/shop/shop-1.jpg';
import img2 from '../../../assets/img/shop/shop-2.jpg';
import img3 from '../../../assets/img/shop/shop-3.jpg';
import img4 from '../../../assets/img/shop/shop-4.jpg';
import img5 from '../../../assets/img/shop/shop-5.jpg';
import img6 from '../../../assets/img/shop/shop-6.jpg';
import img7 from '../../../assets/img/shop/shop-7.jpg';
import img8 from '../../../assets/img/shop/shop-8.jpg';
import img9 from '../../../assets/img/shop/shop-9.jpg';

// Static list of products
const products = [
  { id: 1, name: 'Furry hooded parka', price: 59, imageUrl: img1, label: 'New', category: 'Women', sizes: ['s', 'm', 'l'], color: 'Red' },
  { id: 2, name: 'Flowy striped skirt', price: 49, imageUrl: img2, category: 'Women', sizes: ['m', 'l'], color: 'Blue' },
  { id: 3, name: 'Croc-effect bag', price: 59, imageUrl: img3, category: 'Accessories', sizes: ['s', 'm'], color: 'Black' },
  { id: 4, name: 'Dark wash Xavi jeans', price: 59, imageUrl: img4, category: 'Men', sizes: ['m', 'l'], color: 'Grey' },
  { id: 5, name: 'Ankle-cuff sandals', price: 49, originalPrice: 59, imageUrl: img5, label: 'Sale', category: 'Women', sizes: ['xs', 's'], color: 'Beige' },
  { id: 6, name: 'Contrasting sunglasses', price: 59, imageUrl: img6, category: 'Accessories', sizes: ['m'], color: 'Black' },
  { id: 7, name: 'Circular pendant earrings', price: 59, imageUrl: img7, category: 'Accessories', sizes: ['s', 'm'], color: 'Gold' },
  { id: 8, name: 'Cotton T-Shirt', price: 59, imageUrl: img8, label: 'Out Of Stock', category: 'Men', sizes: ['l', 'xl'], color: 'White' },
  { id: 9, name: 'Water resistant zips backpack', price: 49, originalPrice: 59, imageUrl: img9, label: 'Sale', category: 'Accessories', sizes: ['m'], color: 'Green' },
];

const ProductList = ({ filters }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    let updatedProducts = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    // Apply price range filter
    updatedProducts = updatedProducts.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Apply size filter
    if (filters.sizes.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        filters.sizes.some(size => product.sizes.includes(size))
      );
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      updatedProducts = updatedProducts.filter(product =>
        filters.colors.includes(product.color)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="col-lg-9 col-md-9">
      <div className="row">
        {currentProducts.map(product => (
          <div className="col-lg-4 col-md-6" key={product.id}>
            <div className="product__item">
              <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product.imageUrl})` }}>
                {product.label && <div className={`label ${product.label.toLowerCase()}`}>{product.label}</div>}
                <div className="product__item__hover">
                  <ul>
                    <li><a href="#"><span className="icon_cart_alt"></span></a></li>
                    <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                    <li><a href="#"><span className="icon_expand_alt"></span></a></li>
                  </ul>
                </div>
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
      </div>
    </div>
  );
};

export default ProductList;
