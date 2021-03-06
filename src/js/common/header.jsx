import React, { Component } from 'react';
import NavBar from '../navBar';
import BigButton from '../bigButton';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="background">
                    <NavBar />
                    <div className="intro wrapper">
                        <h2>Welcome to Cosimo’s Italian Restaurant</h2>

                        <BigButton message="View our Menu" link="/menu" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
