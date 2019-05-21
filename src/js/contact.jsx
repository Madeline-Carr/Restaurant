import React from 'react';
import ShortNav from './shortNav';
import QuoteBanner from './common/quoteBanner';
const Contact = () => {
    return (
        <div>
            <ShortNav />

            <div className="wrapper">
                <div className="flexTwo">
                    <div>
                        <p>An image will go here.</p>
                    </div>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <h2 className="darkRed">Email:</h2>
                    <h3 className="lightRed">Leon@LeonsRestaurant.com</h3>
                </div>
            </div>
            <QuoteBanner />
        </div>
    );
};

export default Contact;
