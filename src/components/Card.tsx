import React from 'react';
import * as Styles from './Card.styles';
import { T, Button } from './';
type PropsType = { product: string };
const Card = ({ product }: PropsType) => {
  return (
    <Styles.CardWrapper>
      <h3>
        <T translationKey={product + 'Title'}></T>
      </h3>

      <T translationKey={product + 'Text'}></T>
      <Button>Maak een afspraak</Button>
    </Styles.CardWrapper>
  );
};

export default Card;
