import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/customcss.scss'; // Import your custom CSS
import category1 from '../../assets/img/categories/category-1.jpg';
import category2 from '../../assets/img/categories/category-2.jpg';
import category3 from '../../assets/img/categories/category-3.jpg';
import category4 from '../../assets/img/categories/category-4.jpg';
import category5 from '../../assets/img/categories/category-5.jpg';

const Section1 = () => {
    return (
      <section className="categories">
        <div className="container-fluid">
          <div className="row no-gutters">
            {/* Large Image Column */}
            <div className="col-lg-6 p-0">
              <div
                className="categories__item categories__large__item"
                style={{ backgroundImage: `url(${category1})` }}
              >
                <div className="categories__text">
                  <h1>Women’s Fashion</h1>
                  <p>
                    Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Pendisse ultrices gravida.
                  </p>
                  <Link to="/shop/women" className="btn btn-primary">Shop Now</Link>
                </div>
              </div>
            </div>
            
            {/* Grid of Smaller Images */}
            <div className="col-lg-6">
              <div className="row no-gutters">
                <div className="col-md-6 p-0">
                  <div
                    className="categories__item"
                    style={{ backgroundImage: `url(${category2})` }}
                  >
                    <div className="categories__text">
                      <h4>Men’s Fashion</h4>
                      <p>358 items</p>
                      <Link to="/shop/men" className="btn btn-primary">Shop Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div
                    className="categories__item"
                    style={{ backgroundImage: `url(${category3})` }}
                  >
                    <div className="categories__text">
                      <h4>Kid’s Fashion</h4>
                      <p>273 items</p>
                      <Link to="/shop/kids" className="btn btn-primary">Shop Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div
                    className="categories__item"
                    style={{ backgroundImage: `url(${category4})` }}
                  >
                    <div className="categories__text">
                      <h4>Cosmetics</h4>
                      <p>159 items</p>
                      <Link to="/shop/cosmetics" className="btn btn-primary">Shop Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <div
                    className="categories__item"
                    style={{ backgroundImage: `url(${category5})` }}
                  >
                    <div className="categories__text">
                      <h4>Accessories</h4>
                      <p>792 items</p>
                      <Link to="/shop/accessories" className="btn btn-primary">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Section1;
