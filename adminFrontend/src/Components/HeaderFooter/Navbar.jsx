import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'; // Adjust the path as necessary
import './Navbar.scss'; // Ensure this includes your styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    useEffect(() => {
        // Your modal initialization code
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" style={{ height: '40px' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="electronicsDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    Electronics
                                </a>
                                <div className="dropdown-menu" aria-labelledby="electronicsDropdown">
                                    <Link to="/electronics/list1" className="dropdown-item">List 1</Link>
                                    <Link to="/electronics/list2" className="dropdown-item">List 2</Link>
                                    <Link to="/electronics/list3" className="dropdown-item">List 3</Link>
                                    <Link to="/electronics/list4" className="dropdown-item">List 4</Link>
                                    <Link to="/electronics/list5" className="dropdown-item">List 5</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="fashionDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    Fashion
                                </a>
                                <div className="dropdown-menu" aria-labelledby="fashionDropdown">
                                    <a className="dropdown-item dropdown-toggle" href="#" id="menDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Men
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="menDropdown">
                                        <Link to="/fashion/men/jeans" className="dropdown-item">Jeans</Link>
                                        <Link to="/fashion/men/trousers" className="dropdown-item">Trousers</Link>
                                        <Link to="/fashion/men/shirts" className="dropdown-item">Shirts</Link>
                                    </div>
                                    <a className="dropdown-item dropdown-toggle" href="#" id="womenDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Women
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="womenDropdown">
                                        <Link to="/fashion/women/dresses" className="dropdown-item">Dresses</Link>
                                        <Link to="/fashion/women/tops" className="dropdown-item">Tops</Link>
                                        <Link to="/fashion/women/skirts" className="dropdown-item">Skirts</Link>
                                    </div>
                                    <a className="dropdown-item dropdown-toggle" href="#" id="kidsDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Kids
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="kidsDropdown">
                                        <Link to="/fashion/kids/shirts" className="dropdown-item">Shirts</Link>
                                        <Link to="/fashion/kids/pants" className="dropdown-item">Pants</Link>
                                        <Link to="/fashion/kids/jackets" className="dropdown-item">Jackets</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-search" id="searchIcon"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    My Account
                                </a>
                                <div className="dropdown-menu" aria-labelledby="accountDropdown">
                                    <Link to="/account" className="dropdown-item">My Account</Link>
                                    <Link to="/login" className="dropdown-item">Log In</Link>
                                    <Link to="/signup" className="dropdown-item">Sign Up</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Search Modal */}
            <div id="searchModal" className="modal">
                <div className="modal-content">
                    <span id="closeSearchModal" className="close">&times;</span>
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </>
    );
};

export default Navbar;
