import React from 'react';
import * as Styles from './Products.styles';
import { producten } from '../constants';
import { Card } from './';
type PropsType = {};
const Products = ({}: PropsType) => {
  return (
    <Styles.ProductsWrapper>
      {producten.map((product) => {
        return <Card key={product} product={product}></Card>;
      })}
    </Styles.ProductsWrapper>
  );
};

export default Products;
