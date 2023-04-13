import React from 'react';
import s from './ProductsList.module.css';
import ProductsItem from '../ProductsItem/ProductsItem';

const ProductsList = ({ products }) => {
  return (
    <div className={s.products__list}>
      {products.map((elem, index) => (
        <ProductsItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductsList;
