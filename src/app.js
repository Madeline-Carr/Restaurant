import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './js/home';
import AdBanner from './js/adbanner';

const App = () => {
    return (
        <React.Fragment>
            <AdBanner />
            <main className="content">
                <Switch>
                    <Route path="/ad" component={AdBanner} />
                    <Route path="/home" component={Home} />
                    <Redirect exact from="/" to="/home" />
                    <Redirect to="/home" />
                </Switch>
            </main>
        </React.Fragment>
    );
};

export default App;
