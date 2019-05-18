import React from 'react';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './common/header';
import AdBanner from './adbanner';
import QuoteBanner from './quoteBanner';
import Footer from './footer';

const Home = () => {
    return (
        <div>
            <AdBanner />
            <Header />
            <QuoteBanner />
            <Footer />
        </div>
    );
};

export default Home;
