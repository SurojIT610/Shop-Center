import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList.jsx';
import './ShopPage.scss';

const ShopPage = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 100],
    sizes: [],
    colors: []
  });
  
  const [cartItems, setCartItems] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
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
          <ProductList filters={filters} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
