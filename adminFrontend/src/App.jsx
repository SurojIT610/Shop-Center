import React from 'react';
import Navbar from './Components/HeaderFooter/Navbar.jsx';
import Footer from './Components/HeaderFooter/Footer';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shoppage/ShopPage';
import ProductDetails from './Pages/ProductDetail/ProductDetails';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <HomePage />
        {/* <ShopPage /> */}
        {/* <ProductDetails /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
