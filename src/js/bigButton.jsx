import React from 'react';

const BigButton = props => {
    return (
        <div className="center">
            <button className="space">{props.message}</button>
        </div>
    );
};

export default BigButton;
