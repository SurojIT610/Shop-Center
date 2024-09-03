// ShopPage.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';
import './Components/ShopPage.scss';

const ShopPage = () => {
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <Sidebar />
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
