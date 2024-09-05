import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/HeaderFooter/Navbar.jsx';
import Footer from './Components/HeaderFooter/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shoppage/ShopPage';
import ProductDetails from './Pages/ProductDetail/ProductDetails';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
