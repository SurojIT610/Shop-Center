import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import RelatedProducts from './components/RelatedProducts';
import './ProductDetail.scss';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productResponse = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(productResponse.data);

        const relatedResponse = await axios.get(`https://dummyjson.com/products?category=${productResponse.data.category}`);
        const filteredProducts = relatedResponse.data.products
          .filter(p => p.id !== productId) // Exclude the current product
          .filter(p => p.category === productResponse.data.category); // Ensure same category

        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="product-details spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ProductImageGallery images={product.images} />
          </div>
          <div className="col-lg-6">
            <ProductInfo product={product} />
          </div>
          <div className="col-lg-12">
            <ProductTabs product={product} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="related__title">
              <h5>RELATED PRODUCTS</h5>
            </div>
          </div>
          <RelatedProducts products={relatedProducts} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
