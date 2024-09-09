// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductProvider } from './Contexts/ProductContext'; // Ensure correct path
import Navbar from './components/HeaderFooter/Navbar.jsx';
import Footer from './components/HeaderFooter/Footer';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import ProductDetails from './pages/ProductDetail/ProductDetails';
import Cart from './pages/CartPage/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ShopPage />} /> 
          <Route path="/product-details/:productId" element={<ProductDetails />} />
          <Route path="/my-cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </ProductProvider>
  );
}

export default App;
