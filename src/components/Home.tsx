import React from 'react';
import * as Styles from './Home.styles';

import { Button, Image, T, Newsletter, Testimonials } from './';
type PropsType = {};
const Home = ({}: PropsType) => {
  return (
    <Styles.HomeWrapper>
      <div className="grid-container">
        <div className="verzorging">
          <a href="verzorgingen">
            <Button>
              <T translationKey="verzorgingen" />
              &nbsp; &rarr;
            </Button>
            <Image imageKey="v"></Image>
          </a>
        </div>
        <div className="wie">
          <T translationKey="wieIsVeerle" />
          <br></br>
          <br></br>
          <Button href="mailto:veerle@fabulousv.be?subject=Afspraak Fabulous V">
            <T translationKey="maakEenAfspraak" />
          </Button>
        </div>

        <div className="slogan">
          <T
            style={{
              fontFamily: 'Playfair Display',
              paddingTop: '1rem',
              paddingBottom: '0rem',
            }}
            translationKey="slogan"
          ></T>
          <Button href="prijzen">
            <T translationKey="prijslijst" />
            &nbsp; &rarr;
          </Button>
        </div>
        {/* <div className="producten">
          <Button>Producten</Button>
          <Image imageKey="producten"></Image>
        </div> */}
        <div className="producten">
          <Newsletter />
        </div>

        <div className="review">
          <Testimonials />
        </div>
      </div>
    </Styles.HomeWrapper>
  );
};

export default Home;
