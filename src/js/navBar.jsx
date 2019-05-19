import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="wrapper">
            <div className="logo">
                <h2>Cosimo's Italian Restaurant</h2>
            </div>
            <nav className="nav">
                <a href="#" className="active">
                    Home
                </a>
                <Link to="/menu">Menu</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;
