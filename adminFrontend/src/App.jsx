import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/HeaderFooter/Navbar'
import Footer from './Components/HeaderFooter/Footer'
import Section1 from './Components/HeroSection/Section1'
import Products from './Components/Productsection/Products'
import AddCarousel from './Components/AddCarousel/AddCarousel'
import Trendy from './Components/TrendySection/Trendy'
import Discount from './Components/Discount/Discount'
import DetailDesc from './Components/DetailDesc/DetailDesc'
import InstagramFeed from './Components/InstagramFeed/InstagramFeed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
            <Navbar />
            <Section1/>
            <Products/>
            <AddCarousel/>
            <Discount/>
            <Trendy/>
            <DetailDesc/>
            <InstagramFeed/>
            <Footer />
        </div>
    </>
  )
}

export default App
