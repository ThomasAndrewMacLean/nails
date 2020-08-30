import React from 'react';
import * as Styles from './Home.styles';
import { Button, Image } from './';
type PropsType = {};
const Home = ({}: PropsType) => {
  return (
    <Styles.HomeWrapper>
      <div className="grid-container">
        <div className="verzorging">
          <Image imageKey="verzorging"></Image>
          <Button>Verzorgingen</Button>
        </div>
        <div className="wie">
          Handen en nagels zeggen veel over een mens. Vooral vrouwen vinden hun
          nagels belangrijk. Ze vijlen ze. Ze lakken ze. Veerle van Overloop
          heeft een praktijk “Fabulous V” in Waasmunster. “Fabulous V” staat
          voor elegantie, stijl en passie. Veerle volgt al jaren de trends op
          omtrent nagels, zelf draagt ze al jaren gelnagels. Bij “Fabulous V”
          kunt u terecht voor een manicure, gelnagels en gewoon lakken.
        </div>
        <div className="afspraak">
          <Button>Maak een afspraak</Button>
        </div>
        <div className="slogan">
          <p>remember</p>
          <p>be proud</p>
          <span>nails</span>
          <p>repeat</p>
        </div>
        <div className="producten">
          <Button>Producten</Button>
          <Image imageKey="producten"></Image>
        </div>
        <div className="prijslijst">
          <Button>Prijslijst</Button>
        </div>
      </div>
    </Styles.HomeWrapper>
  );
};

export default Home;
