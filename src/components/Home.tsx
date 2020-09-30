import React from 'react';
import * as Styles from './Home.styles';
import { Button, Image, T, Newsletter } from './';
type PropsType = {};
const Home = ({}: PropsType) => {
  return (
    <Styles.HomeWrapper>
      <div className="grid-container">
        <div className="verzorging">
          <a href="verzorgingen">
            <Button>Verzorgingen</Button>
            <Image imageKey="verzorging"></Image>
          </a>
        </div>
        <div className="wie">
          <T translationKey="wieIsVeerle" />
          <br></br>
          <br></br>
          <Button href="afspraak">
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
          <Button href="prijzen">Prijslijst</Button>
        </div>
        {/* <div className="producten">
          <Button>Producten</Button>
          <Image imageKey="producten"></Image>
        </div> */}
        <div className="producten">
          <Newsletter />
        </div>
      </div>
    </Styles.HomeWrapper>
  );
};

export default Home;
