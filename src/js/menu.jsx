import React from 'react';
import ShortNav from './shortNav';
const Menu = () => {
    return (
        <div>
            <ShortNav />
            <div className="wrapper">
                <h1>Our Menu</h1>
                <h2 className="darkRed">Pizza</h2>
                <h3 className="lightRed">
                    Pizzas are only available in personal sizes.{' '}
                </h3>
                <p>Cheese Pizza</p>
                <p>Pepperoni Pizza</p>
            </div>
        </div>
    );
};

export default Menu;
