import React from 'react';
import MenuItem from './menuItem';

const PizzaMenu = () => {
    return (
        <div>
            <div className="center">
                <h2 className="darkRed largeText">Pasta</h2>
                <h3 className="lightRed">
                    {' '}
                    Pizzas are only available in personal sizes.
                </h3>
            </div>
            <div className="container menu">
                <div className="one">
                    <ul>
                        <MenuItem
                            name="Cheese Pizza"
                            price="15.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="Pepperoni Pizza"
                            price="17.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
                <hr />
                <div className="one">
                    <ul>
                        <MenuItem
                            name="Cheese Pizza"
                            price="15.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="Pepperoni Pizza"
                            price="17.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PizzaMenu;
