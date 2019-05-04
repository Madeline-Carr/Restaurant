import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './js/hero';
import Header from './js/header';

ReactDOM.render(
    <div>
        <Header />
        <Hero Title="Hello World" />
    </div>,
    document.getElementById('app')
);
