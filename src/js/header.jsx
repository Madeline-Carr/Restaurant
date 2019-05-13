import React, { Component } from 'react';
import NavBar from './navBar';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="background">
                    <NavBar />
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
