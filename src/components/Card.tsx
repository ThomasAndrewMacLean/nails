import React from 'react';
import * as Styles from './Card.styles';
import { T } from './';
type PropsType = { product: string };
const Card = ({ product }: PropsType) => {
  return (
    <Styles.CardWrapper>
      <h3>
        <T translationKey={product + 'Title'}></T>
      </h3>

      <T translationKey={product + 'Text'}></T>
    </Styles.CardWrapper>
  );
};

export default Card;
