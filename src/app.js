import React from 'react';
import Home from './js/home';
import { Route, Redirect, Switch } from 'react-router-dom';
import AdBanner from './js/adbanner';

/*Testing
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// this assumes that all your app files
// `public` directory relative to where your server.js is
app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log('Server started on port ' + port);
*/

const App = () => {
    return (
        <React.Fragment>
            <AdBanner />
            <main className="main">
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
