import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import { useProducts } from '../../Contexts/ProductContext';
import './ShopPage.scss';

const ShopPage = () => {
  const { category } = useParams(); // Get category from URL
  const { products, loading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 100],
    sizes: [],
    colors: []
  });
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!loading) {
      let updatedProducts = [...products];

      // Debugging logs
      console.log('Category from URL:', category);
      console.log('All Products:', products);

      if (category) {
        // Filter products by category from URL
        updatedProducts = updatedProducts.filter(product => product.category === category);
      }

      // Apply additional filters
      if (filters.categories.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          filters.categories.includes(product.category)
        );
      }

      updatedProducts = updatedProducts.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );

      if (filters.sizes.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          filters.sizes.some(size => product.sizes && product.sizes.includes(size))
        );
      }

      if (filters.colors.length > 0) {
        updatedProducts = updatedProducts.filter(product =>
          filters.colors.includes(product.color)
        );
      }

      console.log('Filtered Products:', updatedProducts);
      
      setFilteredProducts(updatedProducts);
    }
  }, [category, filters, products, loading]);
  
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
          <ProductList products={filteredProducts} filters={filters} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
