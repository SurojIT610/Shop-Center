// Sidebar.js
import React from 'react';
import './Sidebar';

const Sidebar = () => {
  return (
    <div className="col-lg-3 col-md-3">
      <div className="shop__sidebar">
        <div className="sidebar__categories">
          <div className="section-title">
            <h4>Categories</h4>
          </div>
          <div className="categories__accordion">
            <div className="accordion" id="accordionExample">
              {/* Category items */}
              {['Women', 'Men', 'Kids', 'Accessories', 'Cosmetic'].map((category, index) => (
                <div className="card" key={index}>
                  <div className="card-heading">
                    <a data-toggle="collapse" data-target={`#collapse${index + 1}`}>{category}</a>
                  </div>
                  <div id={`collapse${index + 1}`} className="collapse" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul>
                        {['Coats', 'Jackets', 'Dresses', 'Shirts', 'T-shirts', 'Jeans'].map((item, i) => (
                          <li key={i}><a href="#">{item}</a></li>
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
            <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="33" data-max="99">
              <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '0%', width: '100%' }}></div>
              <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '0%' }}></span>
              <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '100%' }}></span>
            </div>
            <div className="range-slider">
              <div className="price-input">
                <p>Price:</p>
                <input type="text" id="minamount" />
                <input type="text" id="maxamount" />
              </div>
            </div>
            <a href="#">Filter</a>
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
                <input type="checkbox" id={size} />
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
                <input type="checkbox" id={color.toLowerCase()} />
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
