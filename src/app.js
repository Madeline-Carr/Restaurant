import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './js/home';
import AdBanner from './js/adbanner';
import Reservation from './js/reservation';
import Menu from './js/menu';
import AboutUs from './js/aboutUs';
import Contact from './js/contact';
import Footer from './js/footer';

const App = () => {
    return (
        <React.Fragment>
            <AdBanner />
            <main className="content">
                <Switch>
                    <Route path="/reservation" component={Reservation} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/home" component={Home} />
                    <Redirect exact from="/" to="/home" />
                    <Redirect to="/home" />
                </Switch>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default App;
