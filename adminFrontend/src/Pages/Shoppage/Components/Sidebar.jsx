import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = ({ onFilterChange, onClearFilters, onTagClick }) => {
  const history = useHistory();
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
    history.push(`/shop/${category}`); // Update URL
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
    history.push(`/shop/${category}`); // Update URL to reflect selected category
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

    if (noFiltersApplied) {
      onClearFilters();
    } else {
      onFilterChange({
        categories: selectedCategories,
        tags: selectedTags,
        priceRange,
        sizes: selectedSizes,
        colors: selectedColors,
        brands: selectedBrands
      });
    }
  };

  const handleClear = () => {
    setSelectedCategories([]);
    setSelectedTags({});
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setPriceRange([0, 1000000]);
    setLowPrice(0);
    setHighPrice(1000000);
    onClearFilters();
  };

  return (
    <div className="sidebar">
      <h4>Filter by Category</h4>
      <ul className="category-list">
        {categories.map(({ category, tags }) => (
          <li key={category}>
            <div
              className={`category ${selectedCategories.includes(category) ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
            {selectedCategories.includes(category) && (
              <ul className="tag-list">
                {tags.map(tag => (
                  <li
                    key={tag}
                    className={`tag ${selectedTags[category]?.includes(tag) ? 'active' : ''}`}
                    onClick={() => handleTagClick(category, tag)}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <h4>Filter by Size</h4>
      <div className="filter-group">
        {sizes.map(size => (
          <div key={size} className="size">
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
            <label>{size}</label>
          </div>
        ))}
      </div>

      <h4>Filter by Color</h4>
      <div className="filter-group">
        {colors.map(color => (
          <div key={color} className="color">
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            <label>{color}</label>
          </div>
        ))}
      </div>

      <h4>Filter by Brand</h4>
      <Select
        isMulti
        options={brands}
        onChange={handleBrandChange}
        value={brands.filter(brand => selectedBrands.includes(brand.value))}
      />

      <h4>Filter by Price</h4>
      <Slider
        range
        min={0}
        max={1000000}
        value={priceRange}
        onChange={handlePriceChange}
      />
      <div className="price-range">
        ${lowPrice} - ${highPrice}
      </div>

      <div className="filter-actions">
        <button onClick={handleFilter}>Apply Filters</button>
        <button onClick={handleClear}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Sidebar;
