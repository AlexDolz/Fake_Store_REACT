import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './components/Pages/HomePage/HomePage';
import ProductsPage from './components/Pages/ProductsPage/ProductsPage';
import ProductsInfoPage from './components/Pages/ProductsInfoPage/ProductsInfoPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/products' component={ProductsPage} />
          <Route path='/products/:id' component={ProductsInfoPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </HashRouter>

      <Footer />
    </div>
  );
};

export default App;
