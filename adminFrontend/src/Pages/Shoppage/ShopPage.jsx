import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import { useProducts } from '../../Contexts/ProductContext';
import './ShopPage.scss';

const ShopPage = () => {
  const { products, loading } = useProducts();
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: category ? [category] : [],
    tags: {},
    priceRange: [0, 1000000],
    sizes: [],
    colors: [],
    brands: []
  });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!loading) {
      let updatedProducts = [...products];

      const noFiltersApplied = (
        filters.categories.length === 0 &&
        Object.keys(filters.tags).length === 0 &&
        filters.sizes.length === 0 &&
        filters.colors.length === 0 &&
        filters.brands.length === 0 &&
        (filters.priceRange[0] === 0 && filters.priceRange[1] === 1000000)
      );

      if (!noFiltersApplied) {
        if (filters.categories.length > 0) {
          updatedProducts = updatedProducts.filter(product =>
            filters.categories.includes(product.category)
          );
        }

        if (Object.keys(filters.tags).length > 0) {
          updatedProducts = updatedProducts.filter(product =>
            product.tags.some(tag =>
              Object.keys(filters.tags).some(cat => filters.tags[cat].includes(tag))
            )
          );
        }

        updatedProducts = updatedProducts.filter(product =>
          product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
        );

        if (filters.sizes.length > 0) {
          updatedProducts = updatedProducts.filter(product =>
            filters.sizes.some(size => product.dimensions && Object.values(product.dimensions).includes(size))
          );
        }

        if (filters.colors.length > 0) {
          updatedProducts = updatedProducts.filter(product =>
            filters.colors.includes(product.color)
          );
        }

        if (filters.brands.length > 0) {
          updatedProducts = updatedProducts.filter(product =>
            filters.brands.includes(product.brand)
          );
        }
      }

      setFilteredProducts(updatedProducts);
    }
  }, [filters, products, loading, category]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  const handleTagClick = (category, tag) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      tags: {
        ...prevFilters.tags,
        [category]: [tag] // Set filter to the selected tag
      }
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      categories: category ? [category] : [],
      tags: {},
      priceRange: [0, 1000000],
      sizes: [],
      colors: [],
      brands: []
    });
  };

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevItems, product];
    });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="shop-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <Sidebar
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              onTagClick={handleTagClick} // Pass the handler to Sidebar
            />
          </div>
          <div className="col-lg-9 col-md-9">
            {filteredProducts.length === 0 ? (
              <div className="no-products">No products found</div>
            ) : (
              <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
