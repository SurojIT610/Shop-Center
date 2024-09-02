// src/components/Discount.jsx

import React, { useEffect, useState } from 'react';
import '../../assets/css/Discount.scss'; // Import the CSS file

// Import image
import discountImg from '../../assets/img/discount.jpg';

const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date('2024-12-31T23:59:59'); // Set your target date here
    const difference = endDate - now;

    let timeLeft = {};
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
    } else {
        timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    return timeLeft;
}

const Discount = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <section className="discount">
            <div className="container">
                <div className="row">
                    {/* Image */}
                    <div className="col-lg-6 p-0">
                        <div className="discount__pic">
                            <img src={discountImg} alt="Discount Summer 2019" />
                        </div>
                    </div>
                    
                    {/* Text and Countdown */}
                    <div className="col-lg-6 p-0">
                        <div className="discount__text">
                            <div className="discount__text__title">
                                <span>Discount</span>
                                <h2>Summer 2019</h2>
                                <h5><span>Sale</span> 50%</h5>
                            </div>
                            <div className="discount__countdown" id="countdown-time">
                                <div className="countdown__item">
                                    <span>{timeLeft.days}</span> <p>Day</p>
                                </div>
                                <div className="countdown__item">
                                    <span>{timeLeft.hours}</span> <p>Hour</p>
                                </div>
                                <div className="countdown__item">
                                    <span>{timeLeft.minutes}</span> <p>Min</p>
                                </div>
                                <div className="countdown__item">
                                    <span>{timeLeft.seconds}</span> <p>Sec</p>
                                </div>
                            </div>
                            <a href="#" className="shop-now">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Discount;
