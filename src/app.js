import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './js/home';
import AdBanner from './js/adbanner';
import Menu from './js/menu';

const App = () => {
    return (
        <React.Fragment>
            <AdBanner />
            <main className="content">
                <Switch>
                    <Route path="/about-us" component={Menu} />
                    <Route path="/contact" component={Menu} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/home" component={Home} />
                    <Redirect exact from="/" to="/home" />
                    <Redirect to="/home" />
                </Switch>
            </main>
        </React.Fragment>
    );
};

export default App;
