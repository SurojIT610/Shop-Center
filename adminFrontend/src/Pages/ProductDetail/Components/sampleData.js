// src/components/sampleData.js
import img1 from '../../../assets/img/product/details/product-1.jpg';
import img2 from '../../../assets/img/product/details/product-2.jpg';
import img3 from '../../../assets/img/product/details/product-3.jpg';
import img4 from '../../../assets/img/product/details/product-4.jpg';

const sampleProduct = {
    name: "Essential Structured Blazer",
    description: "A stylish and formal blazer for men, perfect for any occasion.",
    price: 75.0,
    stock: 20,
    rating: 4.5,
    imageUrl: [img1, img2, img3, img4], // Use imported images here
    category: "Clothing",
    brand: "SKMEI",
    tags: ["blazer", "men's fashion", "formal"],
    dimensions: {
      length: 60,
      width: 40,
      height: 5,
      unit: "cm"
    },
    weight: 1.2,
    warranty: "1 year",
    manufacturer: {
      name: "SKMEI",
      contact: "info@skmei.com"
    },
    supplier: {
      name: "Fashion Hub",
      contact: "contact@fashionhub.com"
    },
    sales: {
      totalSales: 150,
      lastSold: "2024-09-01T00:00:00.000Z"
    },
    sellerId: "63f0b1d3c7a1e1f5d7b1b1e1"
};

export default sampleProduct;
