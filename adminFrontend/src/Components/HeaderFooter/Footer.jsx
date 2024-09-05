import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import payment1 from '../../assets/img/payment/payment-1.png';
import payment2 from '../../assets/img/payment/payment-2.png';
import payment3 from '../../assets/img/payment/payment-3.png';
import payment4 from '../../assets/img/payment/payment-4.png';
import payment5 from '../../assets/img/payment/payment-5.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


import './_footer.scss'

const Footer = () => {
    return (
        <footer className="footer bg-light"> {/* Added bg-light class */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-7">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <Link to="/"><img src={logo} alt="Logo" /></Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            cilisis.</p>
                            <div className="footer__payment">
                                <Link to="#"><img src={payment1} alt="Payment 1" /></Link>
                                <Link to="#"><img src={payment2} alt="Payment 2" /></Link>
                                <Link to="#"><img src={payment3} alt="Payment 3" /></Link>
                                <Link to="#"><img src={payment4} alt="Payment 4" /></Link>
                                <Link to="#"><img src={payment5} alt="Payment 5" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-5">
                        <div className="footer__widget">
                            <h6>Quick links</h6>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blogs</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="footer__widget">
                            <h6>Account</h6>
                            <ul>
                                <li><Link to="/account">My Account</Link></li>
                                <li><Link to="/orders-tracking">Orders Tracking</Link></li>
                                <li><Link to="/checkout">Checkout</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-8">
                        <div className="footer__newslatter">
                            <h6>NEWSLETTER</h6>
                            <form action="#">
                                <input type="text" placeholder="Email" />
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                            <div className="footer__social">
                                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></Link>
                                <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></Link>
                                <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></Link>
                                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></Link>
                                <Link to="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright__text">
                            <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by Surojit Majumdar</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
