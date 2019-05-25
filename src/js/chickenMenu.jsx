import React from 'react';
import MenuItem from './menuItem';

const ChickenMenu = () => {
    return (
        <div>
            <div className="center">
                <h2 className="darkRed largeText">Chicken & Veal</h2>
                <h3 className="lightRed">Served with side pasta & salad</h3>
            </div>
            <div className="container menu">
                <div className="one">
                    <ul>
                        <MenuItem
                            name="CHICKEN PARMIGIANA"
                            price="15.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="CHICKEN PICCATA"
                            price="17.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                        <MenuItem
                            name="VEAL FLORENTINE"
                            price="17.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
                <hr />
                <div className="one">
                    <ul>
                        <MenuItem
                            name="CHICKEN FRANCESE"
                            price="15.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="VEAL PARMIGIANA"
                            price="17.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChickenMenu;
