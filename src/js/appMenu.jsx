import React from 'react';
import MenuItem from './menuItem';

const AppMenu = () => {
    return (
        <div>
            <div className="center">
                <h2 className="darkRed largeText">Appetizers</h2>
            </div>
            <div className="container menu">
                <div className="one">
                    <ul>
                        <MenuItem
                            name="BREADSTICKS (6)"
                            price="12.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="GARLIC BREAD"
                            price="10.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="GARLIC BREAD W/ CHEESE"
                            price="11.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
                <hr />
                <div className="one">
                    <ul>
                        <MenuItem
                            name="MOZZARELLA STICKS (6)"
                            price="12.50"
                            description="This is a pizza with cheese."
                        />
                        <MenuItem
                            name="FRIED CALAMARI"
                            price="10.50"
                            description="This is a pizza with cheese and pepperoni."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppMenu;
