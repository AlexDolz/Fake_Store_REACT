import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
