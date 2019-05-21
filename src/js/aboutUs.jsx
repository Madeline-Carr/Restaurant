import React from 'react';
import ShortNav from './shortNav';
const AboutUs = () => {
    return (
        <div>
            <ShortNav />
            <div className="wrapper">
                <div className="container">
                    <div className="one">
                        <img
                            src="../images/FoodLine.jpeg"
                            alt=""
                            width="300px"
                        />
                    </div>
                    <div className="two">
                        <h1>About Us</h1>
                        <p>
                            Since 1992, Cosimo’s Italian Restaurant has been
                            serving authentic Italian cuisine. We have been
                            located in Midlothian since 1996.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
