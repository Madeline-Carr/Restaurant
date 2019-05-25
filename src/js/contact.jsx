import React from 'react';
import ShortNav from './shortNav';
const Contact = () => {
    return (
        <div>
            <ShortNav />
            <div className="wrapper">
                <div className="container">
                    <div className="one">
                        <img
                            src="./images/PizzaAndWine.jpeg"
                            alt=""
                            width="300px"
                            className="squareImage"
                        />
                    </div>

                    <div className="two">
                        <h1>Contact Us</h1>
                        <h2 className="darkRed">Email:</h2>
                        <h3 className="lightRed">
                            Cosimo@CosimosRestaurant.com
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
