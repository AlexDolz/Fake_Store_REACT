import React, { useEffect, useState } from 'react';
import s from './ProductsInfoPage.module.css';
import { useParams } from 'react-router-dom';
import Ratings from '../../Ratings/Ratings';
import AnimatedPage from '../../AnimatedPage/AnimatedPage';

const ProductsInfoPage = () => {
  let [item, setItem] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <AnimatedPage>
      <div className={s.products__info__page}>
        <h1 className={s.products__info__title}>Description of Product</h1>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} />
        <h2>{`Price: ${item.price} $`}</h2>
        <p className={s.products__info__description}>
          <b>Description: </b>
          {item.description}
        </p>
        {item.rating ? <Ratings rating={item.rating.rate} /> : null}
        {/* <Ratings rating={item.rating?.rate} /> the same */}
      </div>
    </AnimatedPage>
  );
};

export default ProductsInfoPage;
