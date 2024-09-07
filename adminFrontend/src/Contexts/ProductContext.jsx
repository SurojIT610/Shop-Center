// src/Contexts/ProductContext.jsx
import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Initial state
const initialState = {
  products: [],
  categories: [],
};

// Action types
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORIES = 'SET_CATEGORIES';

// Reducer function
const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

// Create context
const ProductContext = createContext();

// Custom hook to use the context
export const useProducts = () => useContext(ProductContext);

// Context provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const products = response.data.products;

        // Count products by category
        const categoryCount = products.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1;
          return acc;
        }, {});

        // Sort and get top 5 categories
        const topCategories = Object.entries(categoryCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([category]) => category);

        dispatch({ type: SET_PRODUCTS, payload: products });
        dispatch({ type: SET_CATEGORIES, payload: topCategories });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
