import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from 'react-select';
import './Sidebar.scss';

const Sidebar = ({ onFilterChange, onClearFilters, onTagClick }) => {
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState({});
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

  const handleTagClick = (category, tag) => {
    handleTagChange(category, tag);
    onTagClick(category, tag); // Notify parent component of tag click
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
    const noFiltersApplied = (
      selectedCategories.length === 0 &&
      Object.keys(selectedTags).length === 0 &&
      selectedSizes.length === 0 &&
      selectedColors.length === 0 &&
      selectedBrands.length === 0 &&
      (priceRange[0] === 0 && priceRange[1] === 1000000)
    );

    onFilterChange(noFiltersApplied ? {} : {
      categories: selectedCategories,
      tags: selectedTags,
      priceRange,
      sizes: selectedSizes,
      colors: selectedColors,
      brands: selectedBrands
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags({});
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setPriceRange([0, 1000000]);
    setLowPrice(0);
    setHighPrice(1000000);
    onClearFilters(); // Notify parent component to reset the filters
  };

  const toggleCategory = (category) => {
    setExpandedCategory(prevCategory =>
      prevCategory === category ? null : category
    );
  };

  return (
    <>
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
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleTagClick(category, tag); // Handle tag click
                              }}
                            >
                              {tag}
                            </a>
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
              max={10000}
              value={priceRange}
              onChange={handlePriceChange}
              step={1}
            />
            <div className="range-slider">
              <div className="price-input">
                <input type="number" value={lowPrice} readOnly />
                <span>-</span>
                <input type="number" value={highPrice} readOnly />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar__sizes">
          <div className="section-title">
            <h4>Shop by sizes</h4>
          </div>
          <div className="sizes__list">
            {sizes.map(size => (
              <label key={size}>
                <input
                  type="checkbox"
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                />
                {size}
              </label>
            ))}
          </div>
        </div>
        <div className="sidebar__colors">
          <div className="section-title">
            <h4>Shop by colors</h4>
          </div>
          <div className="colors__list">
            {colors.map(color => (
              <label key={color}>
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                />
                {color}
              </label>
            ))}
          </div>
        </div>
        <div className="sidebar__brands">
          <div className="section-title">
            <h4>Shop by brands</h4>
          </div>
          <Select
            isMulti
            options={brands}
            onChange={handleBrandChange}
          />
        </div>
        <div className="sidebar__filter-btn">
          <button className="primary-btn" onClick={handleFilter}>
            Apply Filters
          </button>
          <button className="secondary-btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
