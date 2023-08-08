import React, { useEffect, useState } from 'react';
import s from './ProductsPage.module.css';
import ProductsList from '../../ProductsList/ProductsList';
import AnimatedPage from '../../AnimatedPage/AnimatedPage';

const ProductsPage = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <AnimatedPage>
      <div className={s.products__section__title}>
        <h1>Products</h1>
        <div className={s.products__section}>
          <ProductsList products={products} />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProductsPage;
