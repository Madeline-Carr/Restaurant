import React from 'react';
import Link from 'react-router-dom';

const BigButton = props => {
    return (
        <div className="center">
            <button className="space">{props.message}</button>
        </div>
    );
};

export default BigButton;
