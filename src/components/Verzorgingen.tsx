import React from 'react';
import * as Styles from './Products.styles';
import { producten } from '../constants';
import { Card, Newsletter, Button, Image } from './';
import { Carousel } from 'react-responsive-carousel';

type PropsType = {};
const Products = ({}: PropsType) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Styles.ProductsWrapper>
      <div style={{ marginTop: '-4rem' }}>
        <Carousel autoPlay={true} showStatus={false}>
          <Image imageKey="hand1"></Image>

          <Image imageKey="hand5"></Image>

          <Image imageKey="hand3"></Image>

          <Image imageKey="hand4"></Image>
        </Carousel>
      </div>
      <div style={{ paddingTop: '4rem' }}>
        <Card dark={false} key={producten[0]} product={producten[0]}></Card>
      </div>
      <div style={{ marginTop: '-12rem' }}>
        <Card dark={false} key={producten[1]} product={producten[1]}></Card>
      </div>{' '}
      <Image imageKey="producten"></Image>
      <div style={{ marginLeft: '0rem' }}>
        <Card dark={false} key={producten[2]} product={producten[2]}></Card>
      </div>
      <div style={{ marginTop: '-4rem', marginLeft: 'auto', width: '75%' }}>
        <Button href="prijzen">Prijslijst</Button>
        <br />
        <br />
        <Newsletter></Newsletter>
      </div>
    </Styles.ProductsWrapper>
  );
};

export default Products;
