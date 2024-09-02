import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'; // Adjust the path as necessary
import '../../assets/css/Navbar.scss'; // Ensure this includes your styles
import { initializeSearchModal } from '../../assets/js/Navbar.js'; // Import the script
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    useEffect(() => {
        initializeSearchModal(); // Initialize the search modal functionality
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="contactDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Contact
                                </a>
                                <div className="dropdown-menu" aria-labelledby="contactDropdown">
                                    <Link to="/contact/l1" className="dropdown-item">l1</Link>
                                    <Link to="/contact/l2" className="dropdown-item">l2</Link>
                                    <Link to="/contact/l3" className="dropdown-item">l3</Link>
                                </div>
                            </li>
                            {/* Additional Dropdowns */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Drop1
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown1">
                                    <Link to="/drop1/item1" className="dropdown-item">Item 1</Link>
                                    <Link to="/drop1/item2" className="dropdown-item">Item 2</Link>
                                    <Link to="/drop1/item3" className="dropdown-item">Item 3</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Drop2
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown2">
                                    <Link to="/drop2/item1" className="dropdown-item">Item 1</Link>
                                    <Link to="/drop2/item2" className="dropdown-item">Item 2</Link>
                                    <Link to="/drop2/item3" className="dropdown-item">Item 3</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Drop3
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown3">
                                    <Link to="/drop3/item1" className="dropdown-item">Item 1</Link>
                                    <Link to="/drop3/item2" className="dropdown-item">Item 2</Link>
                                    <Link to="/drop3/item3" className="dropdown-item">Item 3</Link>
                                </div>
                            </li>
                            {/* Search Icon */}
                            <li className="nav-item">
                                <a id="searchIcon" className="nav-link">
                                    <i className="fa fa-search"></i>
                                </a>
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
