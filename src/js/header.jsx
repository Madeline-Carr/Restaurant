import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <h2>Logo</h2>
                    </div>
                    <nav>
                        <a href="#">Link One</a>
                        <a href="#">Link Two</a>
                        <a href="#">Link Three</a>
                        <a href="#">Link Four</a>
                        <a href="#">Link Five</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
