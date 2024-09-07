// src/Components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Sidebar.scss';

const Sidebar = ({ onFilterChange }) => {
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const products = response.data.products;

        // Extract unique attributes from products
        const uniqueCategories = Array.from(new Set(products.map(product => product.category).filter(Boolean)));
        const uniqueSizes = Array.from(new Set(products.flatMap(product => product.sizes || [])));
        const uniqueColors = Array.from(new Set(products.map(product => product.color).filter(Boolean)));

        // Update state with extracted unique values
        setCategories(uniqueCategories);
        setSizes(uniqueSizes);
        setColors(uniqueColors);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const handleFilter = () => {
    onFilterChange({
      categories: selectedCategories,
      priceRange,
      sizes: selectedSizes,
      colors: selectedColors
    });
  };

  return (
    <div className="col-lg-3 col-md-3">
      <div className="shop__sidebar">
        <div className="sidebar__categories">
          <div className="section-title">
            <h4>Categories</h4>
          </div>
          <div className="accordion" id="accordionCategories">
            <div className="card">
              <div className="card-header" id="headingCategories">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseCategories"
                    aria-expanded="true"
                    aria-controls="collapseCategories"
                  >
                    Categories
                  </button>
                </h5>
              </div>

              <div
                id="collapseCategories"
                className="collapse show"
                aria-labelledby="headingCategories"
                data-parent="#accordionCategories"
              >
                <div className="card-body">
                  <ul>
                    {categories.length > 0 ? (
                      categories.map((category, index) => (
                        <li key={index}>
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                            />
                            {category}
                          </label>
                        </li>
                      ))
                    ) : (
                      <li>No categories available</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar__filter">
          <div className="section-title">
            <h4>Shop by price</h4>
          </div>
          <div className="filter-range-wrap">
            <Slider
              range
              min={0}
              max={100}
              value={priceRange}
              onChange={handlePriceChange}
              marks={{ 0: '$0', 100: '$100' }}
            />
            <div className="range-values">
              <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        <div className="sidebar__filter">
          <div className="section-title">
            <h4>Size</h4>
          </div>
          <ul>
            {sizes.length > 0 ? (
              sizes.map((size, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    />
                    {size}
                  </label>
                </li>
              ))
            ) : (
              <li>No sizes available</li>
            )}
          </ul>
        </div>
        <div className="sidebar__filter">
          <div className="section-title">
            <h4>Color</h4>
          </div>
          <ul>
            {colors.length > 0 ? (
              colors.map((color, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                    />
                    {color}
                  </label>
                </li>
              ))
            ) : (
              <li>No colors available</li>
            )}
          </ul>
        </div>
        <button onClick={handleFilter} className="btn btn-primary">Apply Filters</button>
      </div>
    </div>
  );
};

export default Sidebar;
