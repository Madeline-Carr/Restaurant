import React from 'react';
import MenuItem from './menuItem';

const SoupMenu = () => {
    return (
        <div>
            <div className="center">
                <h2 className="darkRed largeText">Soup & Salad</h2>
                <h3 className="lightRed">
                    Pizzas are only available in personal sizes.
                </h3>
            </div>
            <div className="container menu">
                <div className="one">
                    <ul>
                        <MenuItem
                            name="HOUSE SALAD"
                            price="10.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="CEASAR SALAD"
                            price="11.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
                <hr />
                <div className="one">
                    <ul>
                        <MenuItem
                            name="GREEK SALAD"
                            price="12.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="SOUP OF THE DAY"
                            price="10.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SoupMenu;
