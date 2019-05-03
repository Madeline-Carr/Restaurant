import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Hero from './js/hero';

ReactDOM.render(
    <div>
        <Header />
        <Hero Title="Hello World" />
    </div>,
    document.getElementById('app')
);
