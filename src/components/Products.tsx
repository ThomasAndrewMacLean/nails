import React from 'react';
import * as Styles from './Products.styles';
import { Card, Newsletter, Button, Image } from './';

type PropsType = {};
const Products = ({}: PropsType) => {
  return (
    <Styles.ProductsWrapper>
      <div style={{ marginTop: '-4rem' }}>
        <Image imageKey="producten"></Image>
      </div>
      <div style={{ paddingTop: '4rem' }}>
        <Card dark={false} key={'Producten'} product={'producten'}></Card>
      </div>
      <div style={{ marginTop: '-4rem' }}>
        <Button href="prijzen">Prijslijst</Button>
        <br />
        <br />
        <Newsletter></Newsletter>
        {/* <Card dark={false} key={producten[1]} product={producten[1]}></Card> */}
      </div>{' '}
      <Image imageKey="verzorging"></Image>
      <div style={{ marginLeft: '0rem' }}>
        {/* <Card dark={false} key={producten[2]} product={producten[2]}></Card> */}
      </div>
      <div
        style={{ marginTop: '-4rem', marginLeft: 'auto', width: '75%' }}
      ></div>
    </Styles.ProductsWrapper>
  );
};

export default Products;
