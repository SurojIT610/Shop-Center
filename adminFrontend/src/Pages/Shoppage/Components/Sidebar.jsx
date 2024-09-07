// src/Components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from 'react-select';
import './Sidebar.scss';

const Sidebar = ({ onFilterChange }) => {
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState({}); // Changed to store tags per category
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(1000000);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const products = response.data.products;

        const categoryTagsMap = {};
        const brandSet = new Set();
        const sizeSet = new Set();

        products.forEach(product => {
          const { category, tags, brand, dimensions } = product;
          if (category && tags) {
            if (!categoryTagsMap[category]) {
              categoryTagsMap[category] = new Set();
            }
            tags.forEach(tag => categoryTagsMap[category].add(tag));
          }
          if (brand) {
            brandSet.add(brand);
          }
          if (dimensions) {
            if (dimensions.size) {
              sizeSet.add(dimensions.size);
            }
            if (dimensions.waistSize) {
              sizeSet.add(dimensions.waistSize);
            }
          }
        });

        const categoriesWithTags = Object.keys(categoryTagsMap).map(category => ({
          category,
          tags: Array.from(categoryTagsMap[category])
        }));

        const uniqueBrands = Array.from(brandSet).map(brand => ({ label: brand, value: brand }));
        const uniqueSizes = Array.from(sizeSet);
        const uniqueColors = Array.from(new Set(products.map(product => product.color).filter(Boolean)));

        setCategories(categoriesWithTags);
        setBrands(uniqueBrands);
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

  const handleTagChange = (category, tag) => {
    setSelectedTags(prev => ({
      ...prev,
      [category]: prev[category] ? (prev[category].includes(tag) ? prev[category].filter(t => t !== tag) : [...prev[category], tag]) : [tag]
    }));
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

  const handleBrandChange = (selectedOptions) => {
    const selectedBrandsValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedBrands(selectedBrandsValues);
  };

  const handlePriceChange = ([min, max]) => {
    setLowPrice(min);
    setHighPrice(max);
    setPriceRange([min, max]);
  };

  const handleFilter = () => {
    console.log("Applying Filters:");
    console.log({
      categories: selectedCategories,
      tags: selectedTags,
      priceRange,
      sizes: selectedSizes,
      colors: selectedColors,
      brands: selectedBrands
    });

    onFilterChange({
      categories: selectedCategories,
      tags: selectedTags,
      priceRange,
      sizes: selectedSizes,
      colors: selectedColors,
      brands: selectedBrands
    });
  };

  const toggleCategory = (category) => {
    setExpandedCategory(prevCategory =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div className="col-lg-3 col-md-3">
      <div className="shop__sidebar">
        <div className="sidebar__categories">
          <div className="section-title">
            <h4>Categories</h4>
          </div>
          <div className="accordion" id="accordionCategories">
            {categories.map(({ category, tags }) => (
              <div className="card" key={category}>
                <div className="card-header">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => toggleCategory(category)}
                      aria-expanded={expandedCategory === category}
                    >
                      {category}
                    </button>
                  </h5>
                </div>
                <div
                  className={`collapse ${expandedCategory === category ? 'show' : ''}`}
                  aria-labelledby="headingCategories"
                  data-parent="#accordionCategories"
                >
                  <div className="card-body">
                    <ul>
                      {tags.map((tag, index) => (
                        <li key={index}>
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedTags[category] ? selectedTags[category].includes(tag) : false}
                              onChange={() => handleTagChange(category, tag)}
                            />
                            {tag}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
              max={1000000}
              value={priceRange}
              onChange={handlePriceChange}
            />
            <div className="range-values">
              <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
            </div>
            <div className="price-inputs">
              <label>
                Min Price:
                <input
                  type="number"
                  value={lowPrice}
                  min={0}
                  max={1000000}
                  onChange={(e) => {
                    const newLowPrice = Number(e.target.value);
                    if (newLowPrice <= highPrice) {
                      setLowPrice(newLowPrice);
                      setPriceRange([newLowPrice, highPrice]);
                    }
                  }}
                />
              </label>
              <label>
                Max Price:
                <input
                  type="number"
                  value={highPrice}
                  min={lowPrice}
                  max={1000000}
                  onChange={(e) => {
                    const newHighPrice = Number(e.target.value);
                    if (newHighPrice >= lowPrice) {
                      setHighPrice(newHighPrice);
                      setPriceRange([lowPrice, newHighPrice]);
                    }
                  }}
                />
              </label>
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
        <div className="sidebar__filter">
          <div className="section-title">
            <h4>Brand</h4>
          </div>
          <div className="dropdown">
            <Select 
              isMulti 
              options={brands} 
              value={brands.filter(brand => selectedBrands.includes(brand.value))}
              onChange={handleBrandChange} 
              className="brand-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <button onClick={handleFilter} className="btn btn-primary">Apply Filters</button>
      </div>
    </div>
  );
};

export default Sidebar;
