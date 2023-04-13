import React from 'react';
import s from './ProductsItem.module.css';
import Ratings from '../Ratings/Ratings';
import { Link } from 'react-router-dom';

const ProductsItem = ({ title, rating, id }) => {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <div
          className={s.products__item}
          title='click to see product description'
        >
          <h2 className={s.product__title}>{title}</h2>
          <Ratings rating={rating.rate} />
        </div>
      </Link>
    </div>
  );
};

export default ProductsItem;
