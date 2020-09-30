import React from 'react';
import * as Styles from './Card.styles';
import { T, Button } from './';
type PropsType = { product: string; dark: boolean };
const Card = ({ product, dark }: PropsType) => {
  return (
    <Styles.CardWrapper dark={dark}>
      <h3 id={product.toLowerCase()}>
        <T translationKey={product + 'Title'}></T>
      </h3>
      <T translationKey={product + 'Text'}></T>

      <div className="prijs">
        <T translationKey={product + 'Prijs'}></T>
      </div>
      <Button href="/afspraak">Maak een afspraak</Button>
    </Styles.CardWrapper>
  );
};

export default Card;
