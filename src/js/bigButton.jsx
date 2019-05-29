import React from 'react';
import { Link } from 'react-router-dom';

const BigButton = props => {
    return (
        <div className="center">
            <button className="space">
                <Link to={props.link} className="link">
                    {props.message}
                </Link>
            </button>
        </div>
    );
};

export default BigButton;
