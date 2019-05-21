import React from 'react';
const QuoteBanner = props => {
    return (
        <div className="QuoteBanner">
            <div className="wrapper text">
                <h2 className="lightRed">{props.header}</h2>
                <h4>{props.quote}</h4>
            </div>
        </div>
    );
};

export default QuoteBanner;
