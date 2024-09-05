// src/components/Trendy.jsx

import React from 'react';
import './Trendy.scss'; // Import the CSS file

// Import images
import ht1 from '../../../../assets/img/trend/ht-1.jpg';
import ht2 from '../../../../assets/img/trend/ht-2.jpg';
import ht3 from '../../../../assets/img/trend/ht-3.jpg';
import bs1 from '../../../../assets/img/trend/bs-1.jpg';
import bs2 from '../../../../assets/img/trend/bs-2.jpg';
import bs3 from '../../../../assets/img/trend/bs-3.jpg';
import f1 from '../../../../assets/img/trend/f-1.jpg';
import f2 from '../../../../assets/img/trend/f-2.jpg';
import f3 from '../../../../assets/img/trend/f-3.jpg';

const Trendy = () => {
    return (
        <section className="trend spad">
            <div className="container">
                <div className="row">
                    {/* Hot Trend */}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4>Hot Trend</h4>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={ht1} alt="Chain bucket bag" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Chain bucket bag</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={ht2} alt="Pendant earrings" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Pendant earrings</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={ht3} alt="Cotton T-Shirt" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Cotton T-Shirt</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Best Seller */}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4>Best seller</h4>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={bs1} alt="Cotton T-Shirt" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Cotton T-Shirt</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={bs2} alt="Zip-pockets pebbled tote briefcase" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Zip-pockets pebbled tote <br />briefcase</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={bs3} alt="Round leather bag" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Round leather bag</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature */}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="trend__content">
                            <div className="section-title">
                                <h4>Feature</h4>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={f1} alt="Bow wrap skirt" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Bow wrap skirt</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={f2} alt="Metallic earrings" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Metallic earrings</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                            <div className="trend__item">
                                <div className="trend__item__right">
                                    <img src={f3} alt="Flap cross-body bag" />
                                </div>
                                <div className="trend__item__text">
                                    <h6>Flap cross-body bag</h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trendy;
