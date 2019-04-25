import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/Header';

const title = 'React is Working!';

ReactDOM.render(
    <div className="container">
        <h1>{title} </h1>
        <Header />
    </div>,
    document.getElementById('app')
);
