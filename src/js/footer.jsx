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
                                <span className="lightRed">Mon-Fri:</span>
                                <br />
                                9 a.m. - 11 p.m.
                                <br />
                                <span className="lightRed">Sat:</span>
                                <br />
                                12 p.m - 10 p.m.
                                <br />
                                <span className="lightRed">Closed Sunday</span>
                            </p>
                        </div>

                        <div className="one middle">
                            <h3 className="darkRed">Location</h3>
                            <hr />
                            <p>
                                <span className="lightRed">Address:</span>
                                <br />
                                1257 Old Oak Rd. <br />
                                Midlothian <br />
                                VA, 23113 <br />
                            </p>
                        </div>
                        <div className="one">
                            <h3 className="darkRed">Contact Us</h3>
                            <hr />
                            <p>
                                <span className="lightRed">Phone:</span>
                                <br />
                                (804) 608-9288
                                <br />
                                <span className="lightRed">E-mail:</span>
                                <br /> Cosimo@CosimosRestaurant.com
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
