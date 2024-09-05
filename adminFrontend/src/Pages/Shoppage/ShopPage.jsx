import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';
import './ShopPage.scss';

const ShopPage = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 100],
    sizes: [],
    colors: []
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <Sidebar onFilterChange={handleFilterChange} />
          <ProductList filters={filters} />
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
