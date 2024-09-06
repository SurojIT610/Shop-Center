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

  return (
    <div className="shop-page">
      <div className="container">
        <div className="row">
          <Sidebar onFilterChange={setFilters} />
          <ProductList filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
