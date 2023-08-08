import React from 'react';
import s from './HomePage.module.css';
import AnimatedPage from '../../AnimatedPage/AnimatedPage';

const HomePage = () => {
  return (
    <AnimatedPage>
      <div className={s.homepage__section}>
        <h1>Fake Store</h1>
      </div>
    </AnimatedPage>
  );
};

export default HomePage;
