import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import AdBanner from './js/adbanner';
import QuoteBanner from './js/quoteBanner';

ReactDOM.render(
    <div>
        <AdBanner />
        <Header />
        <QuoteBanner />
    </div>,
    document.getElementById('app')
);
