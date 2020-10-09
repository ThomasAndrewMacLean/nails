import React from 'react';
import * as Styles from './Verzorgingen.styles';
import { producten } from '../constants';
import { Card, Newsletter, Image } from './';
import Slider from 'react-slick';

type PropsType = {};
const Products = ({}: PropsType) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Styles.ProductsWrapper>
      <div
        style={{
          marginTop: '-4rem',
          width: '100%',
          height: '266px',
          overflow: 'hidden',
        }}
      >
        <Slider {...settings}>
          <Image imageKey="hand1"></Image>

          <Image imageKey="hand5"></Image>

          <Image imageKey="hand3"></Image>

          <Image imageKey="hand4"></Image>
        </Slider>
      </div>
      <div className="product0">
        <Card dark={false} key={producten[0]} product={producten[0]}></Card>
      </div>
      <div className="product1">
        <Card dark={false} key={producten[1]} product={producten[1]}></Card>
      </div>
      <Image imageKey="v"></Image>
      <div className="product2">
        <Card dark={false} key={producten[2]} product={producten[2]}></Card>
      </div>

      {/* <div className="product3">
        <Card dark={false} key={producten[3]} product={producten[3]}></Card>
      </div> */}
      <div className="nieuwsBrief">
        <Newsletter></Newsletter>
      </div>
    </Styles.ProductsWrapper>
  );
};

export default Products;
