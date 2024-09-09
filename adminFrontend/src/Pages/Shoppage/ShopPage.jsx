import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import { useProducts } from '../../Contexts/ProductContext';
import './ShopPage.scss';

const ShopPage = () => {
  const { products, loading } = useProducts();
  const { category } = useParams(); // Get the category from URL params
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: category ? [category] : [], // Set category from URL
    tags: {},
    priceRange: [0, 100000000],
    sizes: [],
    colors: [],
    brands: []
  });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!loading) {
      let updatedProducts = [...products];

      // Apply category filters
      if (filters.categories.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          filters.categories.includes(product.category)
        );
      }

      // Apply tag filters
      if (Object.keys(filters.tags).length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          product.tags.some(tag =>
            Object.keys(filters.tags).some(cat => filters.tags[cat].includes(tag))
          )
        );
      }

      // Apply price range filter
      updatedProducts = updatedProducts.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );

      // Apply size filters
      if (filters.sizes.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          filters.sizes.some(size => product.dimensions && Object.values(product.dimensions).includes(size))
        );
      }

      // Apply color filters
      if (filters.colors.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          filters.colors.includes(product.color)
        );
      }

      // Apply brand filters
      if (filters.brands.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          filters.brands.includes(product.brand)
        );
      }

      setFilteredProducts(updatedProducts);
    }
  }, [filters, products, loading]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
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

  return (
    <div className="shop-page">
      <div className="container">
        <div className="row">
          <Sidebar onFilterChange={handleFilterChange} />
          <ProductList products={filteredProducts} filters={filters} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
