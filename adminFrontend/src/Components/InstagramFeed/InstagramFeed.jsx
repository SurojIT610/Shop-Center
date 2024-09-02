import React from 'react';
import '../../assets/css/InstagramFeed.scss'; // Import the CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define an array of image URLs for the Instagram feed
const images = [
    '../../src/assets/img/instagram/insta-1.jpg',
    '../../src/assets/img/instagram/insta-2.jpg',
    '../../src/assets/img/instagram/insta-3.jpg',
    '../../src/assets/img/instagram/insta-4.jpg',
    '../../src/assets/img/instagram/insta-5.jpg',
    '../../src/assets/img/instagram/insta-6.jpg'
];

const InstagramFeed = () => {
    return (
        <div className="instagram">
            <div className="container-fluid">
                <div className="row">
                    {images.map((img, index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item"
                                style={{ backgroundImage: `url(img/instagram/${img})` }}
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram"></i>
                                    <a href="#">@ashion_shop</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramFeed;
