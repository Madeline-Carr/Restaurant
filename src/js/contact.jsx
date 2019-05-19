import React from 'react';
import ShortNav from './shortNav';
const Contact = () => {
    return (
        <div>
            <ShortNav />
            <div className="wrapper">
                <h1>Contact Us</h1>
                <h2 className="darkRed">Email:</h2>
                <h3 className="lightRed">Leon@LeonsRestaurant.com</h3>
            </div>
        </div>
    );
};

export default Contact;
