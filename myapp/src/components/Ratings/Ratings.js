import React from 'react';
import s from './Ratings.module.css';
import { FaStar } from 'react-icons/fa';

const Ratings = ({ rating }) => {
  let starsRounded = Math.round(rating);
  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < starsRounded) {
      stars.push(<FaStar className={s.star} key={i} color='gold' />);
    } else {
      stars.push(<FaStar className={s.star} key={i} />);
    }
  }

  return <div>{stars}</div>;
};

export default Ratings;
