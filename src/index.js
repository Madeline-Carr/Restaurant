import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './js/header';
import AdBanner from './js/adbanner';
import QuoteBanner from './js/quoteBanner';
import Footer from './js/footer';

ReactDOM.render(
    <div>
        <AdBanner />
        <Header />
        <QuoteBanner />
        <Footer />
    </div>,
    document.getElementById('app')
);
