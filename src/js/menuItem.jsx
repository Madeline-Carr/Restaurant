import React from 'react';
const MenuItem = props => {
    return (
        <div>
            <li class="listItem">
                <i class="item">{props.name}:</i>
                <i class="price">${props.price}</i>
            </li>
            <p>{props.description}</p>
        </div>
    );
};

export default MenuItem;
