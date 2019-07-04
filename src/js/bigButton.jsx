import React from 'react';
import { Link } from 'react-router-dom';

const BigButton = props => {
    return (
        <div className="center ">
            <a href={'#' + props.link} className="button border">
                {props.message}
            </a>
        </div>
    );
};

export default BigButton;
