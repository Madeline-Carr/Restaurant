import React from 'react';
import ShortNav from './shortNav';
import PizzaMenu from './pizzaMenu';
import PastaMenu from './pastaMenu';

const Menu = () => {
    return (
        <div>
            <ShortNav />
            <div className="wrapper ">
                <div className="small_right">
                    <h1 className="center">Our Menu</h1>

                    <PizzaMenu />
                    <PastaMenu />
                </div>
            </div>
        </div>
    );
};

export default Menu;
