import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper

import Section1 from './Components/HeroSection/Section1'
import Products from './Components/Productsection/Products'
import AddCarousel from './Components/AddCarousel/AddCarousel'
import Trendy from './Components/TrendySection/Trendy'
import Discount from './Components/Discount/Discount'
import DetailDesc from './Components/DetailDesc/DetailDesc'
import InstagramFeed from './Components/InstagramFeed/InstagramFeed'

const HomePage = () => {
  return (
    <>
      <Section1 />
      <Products />
      <AddCarousel />
      <Discount />
      <Trendy />
      <DetailDesc />
      <InstagramFeed />
    </>
  );
};

export default HomePage;
