import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './js/hero';
import Header from './js/header';
import AdBanner from './js/adbanner';

ReactDOM.render(
    <div>
        <AdBanner />
        <Header />
        <Hero Title="Hello World" />
    </div>,
    document.getElementById('app')
);
