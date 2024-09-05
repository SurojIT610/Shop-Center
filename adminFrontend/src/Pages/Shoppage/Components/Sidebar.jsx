import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

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

  const handleMinPriceChange = (event) => {
    const minValue = Number(event.target.value);
    setPriceRange(prev => [minValue, prev[1]]);
  };

  const handleMaxPriceChange = (event) => {
    const maxValue = Number(event.target.value);
    setPriceRange(prev => [prev[0], maxValue]);
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
          <div className="categories__accordion">
            <div className="accordion" id="accordionExample">
              {['Women', 'Men', 'Kids', 'Accessories', 'Cosmetic'].map((category, index) => (
                <div className="card" key={index}>
                  <div className="card-heading">
                    <a
                      data-toggle="collapse"
                      href={`#collapse${index + 1}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`collapse${index + 1}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </a>
                  </div>
                  <div id={`collapse${index + 1}`} className="collapse" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul>
                        {['Coats', 'Jackets', 'Dresses', 'Shirts', 'T-shirts', 'Jeans'].map((item, i) => (
                          <li key={i}>
                            <label>
                              <input
                                type="checkbox"
                                onChange={() => handleCategoryChange(item)}
                              />
                              {item}
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
        </div>
        <div className="sidebar__filter">
          <div className="section-title">
            <h4>Shop by price</h4>
          </div>
          <div className="filter-range-wrap">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[0]}
              onChange={handleMinPriceChange}
              step="1"
              style={{ width: '100%' }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
              step="1"
              style={{ width: '100%' }}
            />
            <div className="price-input">
              <p>Price:</p>
              <input type="text" value={`$${priceRange[0]}`} readOnly />
              <input type="text" value={`$${priceRange[1]}`} readOnly />
            </div>
            <a href="#" onClick={handleFilter}>Filter</a>
          </div>
        </div>
        <div className="sidebar__sizes">
          <div className="section-title">
            <h4>Shop by size</h4>
          </div>
          <div className="size__list">
            {['xxs', 'xs', 'xs-s', 's', 'm', 'm-l', 'l', 'xl'].map(size => (
              <label key={size} htmlFor={size}>
                {size}
                <input
                  type="checkbox"
                  id={size}
                  onChange={() => handleSizeChange(size)}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>
        <div className="sidebar__color">
          <div className="section-title">
            <h4>Shop by color</h4>
          </div>
          <div className="size__list color__list">
            {['Blacks', 'Whites', 'Reds', 'Greys', 'Blues', 'Beige Tones', 'Greens', 'Yellows'].map(color => (
              <label key={color} htmlFor={color.toLowerCase()}>
                {color}
                <input
                  type="checkbox"
                  id={color.toLowerCase()}
                  onChange={() => handleColorChange(color)}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
