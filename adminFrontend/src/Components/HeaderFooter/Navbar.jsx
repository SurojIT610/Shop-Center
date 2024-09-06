import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'; // Adjust the path as necessary
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JavaScript is included
import './Navbar.scss'; // Custom CSS

const Navbar = ({ cartItemCount }) => {
  useEffect(() => {
    const searchIcon = document.getElementById('searchIcon');
    const searchModal = document.getElementById('searchModal');
    const closeSearchModal = document.getElementById('closeSearchModal');
    
    if (searchIcon && searchModal && closeSearchModal) {
      searchIcon.addEventListener('click', () => {
        searchModal.classList.add('show');
      });

      closeSearchModal.addEventListener('click', () => {
        searchModal.classList.remove('show');
      });

      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
          searchModal.classList.remove('show');
        }
      });
    }

    return () => {
      if (searchIcon) searchIcon.removeEventListener('click', () => {});
      if (closeSearchModal) closeSearchModal.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <>
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
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#" id="searchIcon">
                  <i className="fas fa-search"></i>
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link" to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  {cartItemCount > 0 && (
                    <span className="cart-count">{cartItemCount}</span>
                  )}
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
      </nav>

      {/* Search Modal */}
      <div id="searchModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Search</h5>
              <button type="button" className="btn-close" id="closeSearchModal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
