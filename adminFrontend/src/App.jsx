import { useState } from 'react'
import Navbar from './Components/HeaderFooter/Navbar.jsx'
import Footer from './Components/HeaderFooter/Footer'
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/Shoppage/ShopPage'
import ProductDetails from './Pages/ProductDetail/ProductDetails'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'; // Import jQuery if not included in Bootstrap bundle




function App() {

  return (
    <>
     <div>
            <Navbar />

            <HomePage/>
            {/* <ShopPage/> */}
{/* <ProductDetails/> */}
            <Footer />
        </div>
    </>
  )
}

export default App
