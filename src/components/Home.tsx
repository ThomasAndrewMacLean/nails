import React from 'react';
import * as Styles from './Home.styles';
import { Button, Image, T, Newsletter } from './';
type PropsType = {};
const Home = ({}: PropsType) => {
  return (
    <Styles.HomeWrapper>
      <div className="grid-container">
        <div className="verzorging">
          <Button>Verzorgingen</Button>
          <Image imageKey="verzorging"></Image>
        </div>
        <div className="wie">
          <T translationKey="wieIsVeerle" />
          <br></br>
          <br></br>
          <Button>
            <T translationKey="maakEenAfspraak" />
          </Button>
        </div>

        <div className="slogan">
          <T translationKey="slogan" />
        </div>
        <div className="producten">
          <Button>Producten</Button>
          <Image imageKey="producten"></Image>
        </div>
        <div className="prijslijst">
          <Newsletter />
          {/* <Button>Prijslijst</Button> */}
        </div>
      </div>
    </Styles.HomeWrapper>
  );
};

export default Home;
