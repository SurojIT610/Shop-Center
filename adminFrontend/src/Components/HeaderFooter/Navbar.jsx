import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'; // Adjust the path as necessary
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JavaScript is included

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="36" />
        </Link>

        {/* Toggler for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links and dropdowns */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product-details">Product Detail</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Electronics</Link></li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Submenu</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Submenu Item 1</Link></li>
                    <li><Link className="dropdown-item" to="#">Submenu Item 2</Link></li>
                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Subsubmenu Item 1</Link></li>
                        <li><Link className="dropdown-item" to="#">Subsubmenu Item 2</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>

          {/* Icon Buttons */}
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item me-3 me-lg-0 position-relative">
              <Link className="nav-link" to="/my-cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">5</span> {/* Static number, replace with dynamic value as needed */}
              </Link>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="iconDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="iconDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Custom CSS for nested dropdowns */}
      <style>
        {`
          .dropdown-submenu {
            position: relative;
          }
          .dropdown-submenu .dropdown-menu {
            top: 0;
            left: 100%;
            margin-top: -6px;
            display: none;
            position: absolute;
            z-index: 1000; /* Ensure dropdown is on top */
          }
          .dropdown-submenu:hover .dropdown-menu {
            display: block;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
