// BannerSec.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../../Contexts/ProductContext'; // Adjust path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerSec.scss'; // Import your custom CSS
import category1 from '../../../../assets/img/categories/category-1.jpg';
import category2 from '../../../../assets/img/categories/category-2.jpg';
import category3 from '../../../../assets/img/categories/category-3.jpg';
import category4 from '../../../../assets/img/categories/category-4.jpg';
import category5 from '../../../../assets/img/categories/category-5.jpg';

const BannerSec = () => {
  const { categories } = useProducts();

  // Define category images for demo purposes
  const categoryImages = {
    'women': category1,
    'men': category2,
    'kids': category3,
    'beauty': category4,
    'accessories': category5,
    // Add more categories if necessary
  };

  return (
    <section className="categories">
      <div className="container-fluid">
        <div className="row no-gutters">
          {/* Large Image Column */}
          <div className="col-lg-6 p-0">
            {categories.length > 0 && (
              <div
                className="categories__item categories__large__item"
                style={{ backgroundImage: `url(${categoryImages[categories[0]] || categoryImages['beauty']})` }}
              >
                <div className="categories__text">
                  <h1>{categories[0]}’s Fashion</h1>
                  <p>
                    Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Pendisse ultrices gravida.
                  </p>
                  <Link to={`/shop/${categories[0]}`} className="btn btn-primary">Shop Now</Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Grid of Smaller Images */}
          <div className="col-lg-6">
            <div className="row no-gutters">
              {categories.slice(1).map((category, index) => (
                <div key={index} className="col-md-6 p-0">
                  <div
                    className="categories__item"
                    style={{ backgroundImage: `url(${categoryImages[category] || categoryImages['beauty']})` }}
                  >
                    <div className="categories__text">
                      <h4>{category.charAt(0).toUpperCase() + category.slice(1)} Fashion</h4>
                      <p>{category} items</p>
                      <Link to={`/shop/${category}`} className="btn btn-primary">Shop Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSec;
