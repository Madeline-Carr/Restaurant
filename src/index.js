import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './js/header';
import AdBanner from './js/adbanner';
import QuoteBanner from './js/quoteBanner';
import Footer from './js/footer';
import Features from './js/features';

ReactDOM.render(
    <div>
        <AdBanner />
        <Header />
        <QuoteBanner />
        <Features />
        <Footer />
    </div>,
    document.getElementById('app')
);
