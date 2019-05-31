import React from 'react';
import ShortNav from './shortNav';
import BigButton from './bigButton';
const AboutUs = () => {
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
                        <h1>About Us</h1>
                        <p>
                            For over twenty years, Cosimo’s Italian Restaurant
                            has been serving authentic Italian cuisine. Our
                            first restaurant opened in Nuoro, Italy during 1996.
                            We have been located in Midlothian since 1998.
                        </p>
                        <BigButton
                            message="Make a Reservation"
                            link="/reservation"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
