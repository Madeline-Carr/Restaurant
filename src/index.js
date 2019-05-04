import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import AdBanner from './js/adbanner';

ReactDOM.render(
    <div>
        <AdBanner />
        <Header />
    </div>,
    document.getElementById('app')
);
