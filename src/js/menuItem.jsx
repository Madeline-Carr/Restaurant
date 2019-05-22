import React from 'react';
const MenuItem = props => {
    return (
        <div>
            <li className="listItem">
                <i className="item">{props.name}:</i>
                <i className="price">${props.price}</i>
            </li>
            <p>{props.description}</p>
        </div>
    );
};

export default MenuItem;
