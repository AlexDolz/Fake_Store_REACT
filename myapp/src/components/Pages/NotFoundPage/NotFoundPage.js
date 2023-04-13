import React from 'react';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.not__found__section}>
      <img
        src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000'
        alt='error'
      ></img>
    </div>
  );
};

export default NotFoundPage;
