import { useState } from 'react'
import Navbar from './Components/HeaderFooter/Navbar'
import Footer from './Components/HeaderFooter/Footer'
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/Shoppage/ShopPage'
import ProductDetails from './Pages/ProductDetail/ProductDetails'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
            <Navbar />

            <HomePage/>
            {/* <ShopPage/> */}
<ProductDetails/>
            <Footer />
        </div>
    </>
  )
}

export default App
