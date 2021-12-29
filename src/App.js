import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

import './style/reset.css';
import './style/app.css';

//npm install react-router-dom

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                {/* <Home /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/details" component={Details} />
                    <Route exact path="/:id" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
