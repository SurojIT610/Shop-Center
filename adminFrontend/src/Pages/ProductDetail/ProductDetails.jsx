import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS with Popper

import ProductImageGallery from './Components/ProductImageGallery';
import ProductInfo from './Components/ProductInfo';
import ProductTabs from './Components/ProductTabs';
import RelatedProducts from './Components/RelatedProducts';
import './Components/ProductDetail.scss';

const ProductDetails = () => {
  return (
    <section className="product-details spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ProductImageGallery />
          </div>
          <div className="col-lg-6">
            <ProductInfo />
          </div>
          <div className="col-lg-12">
            <ProductTabs />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="related__title">
              <h5>RELATED PRODUCTS</h5>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails
