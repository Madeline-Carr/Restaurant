import React from 'react';
import ShortNav from './shortNav';
const Menu = () => {
    return (
        <div>
            <ShortNav />
            <div className="wrapper">
                <h1 className="center">Our Menu</h1>
                <div className="center">
                    <h2 className="darkRed largeText">Pizza</h2>
                    <h3 className="lightRed">
                        {' '}
                        Pizzas are only available in personal sizes.
                    </h3>
                </div>

                <ul>
                    <li class="listItem">
                        <i class="item">Cheese Pizza:</i>
                        <i class="price">$15.00</i>
                    </li>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At assumenda fuga illum quia eum cumque minus, sequi,
                        officia fugiat est delectus adipisci maiores nostrum
                        enim ea, ipsum fugit ullam harum!
                    </p>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
