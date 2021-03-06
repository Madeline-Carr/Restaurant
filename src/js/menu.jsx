import React from 'react';
import ShortNav from './shortNav';
import PizzaMenu from './pizzaMenu';
import PastaMenu from './pastaMenu';
import SoupMenu from './soupMenu';
import AppMenu from './appMenu';
import DessertMenu from './desserts';
import ChickenMenu from './chickenMenu';

const Menu = () => {
    return (
        <div>
            <div className="images">
                <img
                    src="./images/halfPizza.png"
                    alt=""
                    className="side sideImage"
                />
                <img
                    src="./images/halfPizza.png"
                    alt=""
                    className="side sideImageBottom"
                />
                <img
                    src="./images/halfPizza.png"
                    alt=""
                    className="side sideImageThird"
                />
            </div>

            <ShortNav />
            <div className="wrapper ">
                <div className="small_right">
                    <h1 className="center">Our Menu</h1>
                    <hr />
                    <AppMenu />
                    <SoupMenu />
                    <PizzaMenu />
                    <PastaMenu />
                    <ChickenMenu />
                    <DessertMenu />
                </div>
            </div>
        </div>
    );
};

export default Menu;
