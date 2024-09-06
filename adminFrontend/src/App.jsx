import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/HeaderFooter/Navbar.jsx';
import Footer from './components/HeaderFooter/Footer';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import ProductDetails from './pages/ProductDetail/ProductDetails';
import Cart from './Pages/CartPage/Cart.jsx'; // Import the Cart component
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
          <Route path="/product-details/:productId" element={<ProductDetails />} />
          <Route path="/my-cart" element={<Cart />} /> {/* Add route for Cart */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
