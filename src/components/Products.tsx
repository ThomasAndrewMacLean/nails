import React from 'react';
import * as Styles from './Products.styles';
import { producten } from '../constants';
import { Card, Newsletter } from './';

type PropsType = {};
const Products = ({}: PropsType) => {
  return (
    <Styles.ProductsWrapper>
      {producten.map((product, i) => {
        return (
          <Card
            dark={false && i % 2 === 0}
            key={product}
            product={product}
          ></Card>
        );
      })}
      <Newsletter></Newsletter>
    </Styles.ProductsWrapper>
  );
};

export default Products;
