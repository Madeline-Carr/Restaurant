import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="background">
                    <div className="container">
                        <div className="logo">
                            <h2>Cosimo's Italian Restaurant</h2>
                        </div>
                        <nav>
                            <a href="#" className="active">
                                Home
                            </a>
                            <a href="#">Menu</a>
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>
                    <div className="intro">
                        <h2>Welcome to Cosimo’s Italian Restaurant</h2>
                        <button>Make a Reservation</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
