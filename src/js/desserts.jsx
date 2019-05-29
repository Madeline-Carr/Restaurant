import React from 'react';
import MenuItem from './menuItem';

const DessertMenu = () => {
    return (
        <div>
            <div className="center">
                <h2 className="darkRed largeText">Desserts</h2>
                <h3 className="lightRed">
                    Pizzas are only available in personal sizes.
                </h3>
            </div>
            <div className="container menu">
                <div className="one">
                    <ul>
                        <MenuItem
                            name="TIRAMISU"
                            price="12.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="CHOCOLATE CAKE"
                            price="10.50"
                            description="An icecream scoop can be added for an additional dollar.An icecream scoop can be added for an additional dollar. "
                        />
                    </ul>
                </div>
                <hr />
                <div className="one">
                    <ul>
                        <MenuItem
                            name="CANNOLI"
                            price="12.50"
                            description="This is a pizza with cheese."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DessertMenu;
