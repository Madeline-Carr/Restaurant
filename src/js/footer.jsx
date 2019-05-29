import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="brownBackground">
                <div className="wrapper">
                    <div className="container">
                        <div className="one">
                            <h3 className="darkRed">Hours of Operation</h3>
                            <hr />
                            <p>
                                Mon-Fri: 9 a.m. - 11 p.m.
                                <br />
                                Sat: 12 p.m - 10 p.m.
                                <br />
                                Closed Sunday
                            </p>
                        </div>

                        <div className="one middle">
                            <h3 className="darkRed">Location</h3>
                            <hr />
                            <p>
                                Address: <br />
                                1257 Old Oak Rd. <br />
                                North Midlothian <br />
                                VA, 23113 <br />
                            </p>
                        </div>
                        <div className="one">
                            <h3 className="darkRed">Contact Us</h3>
                            <hr />
                            <p>
                                Phone: (804) 608-9288
                                <br />
                                E-mail: Cosimo@CosimosRestaurant.com
                            </p>
                        </div>
                    </div>
                    <hr />
                    <p className="center ">
                        Copyright © 2019 Madeline Carr • Richmond based Web
                        Developer
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
