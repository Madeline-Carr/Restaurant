import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="container">
                    <div>
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

                    <div>
                        <h3 className="darkRed">Location</h3>
                        <hr />
                        <p>
                            Address: <br />
                            1257 Old Oak Rd. N. Midlothian, VA 23113
                        </p>
                    </div>
                    <div>
                        <h3 className="darkRed">Contact Us</h3>
                        <hr />
                        <p>
                            Phone: (804) 608-9288
                            <br />
                            E-mail: Leon@LeonsRestaurant.com
                        </p>
                    </div>
                </div>
                <hr />
                <p className="copyright">
                    Copyright © 2019 Madeline Carr • Richmond based Web
                    Developer
                </p>
            </div>
        </footer>
    );
};

export default Footer;
