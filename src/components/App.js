import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import InsuranceGrid from './InsuranceGrid/InsuranceGrid';
import './main.scss';

const App = () => {
    return (
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" component={InsuranceGrid} />
                    <Footer />
                </div>
            </Router>
    );
};

export default App;