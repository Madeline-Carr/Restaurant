import React from 'react';
import ShortNav from './shortNav';
import QuoteBanner from './common/quoteBanner';
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
                        <h1>Reservations</h1>
                        <p>
                            To make a reservation please call us at (804)
                            608-9288.
                        </p>

                        <form action="">
                            <h2 class="heading">Create a Reservation</h2>
                        </form>
                    </div>
                </div>
            </div>
            <QuoteBanner
                header="Our Motto"
                quote="Here at Cosimo’s our food is made fresh everyday."
            />
        </div>
    );
};

export default AboutUs;
