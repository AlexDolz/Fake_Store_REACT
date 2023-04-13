import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import ProductsPage from './components/Pages/ProductsPage/ProductsPage';
import ProductsInfoPage from './components/Pages/ProductsInfoPage/ProductsInfoPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div>
      <HashRouter hashType='hashbang'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductsInfoPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
};

export default App;
