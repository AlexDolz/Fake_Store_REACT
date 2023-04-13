import React from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={s.header__container}>
      <div className={s.menu__container}>
        <p>
          <Link to={'/'}>Home</Link>
        </p>
        <p>
          <Link to={'/products'}>Products</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
