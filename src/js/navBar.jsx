import React from 'react';
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
                <a href="#">Menu</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    );
};

export default NavBar;
