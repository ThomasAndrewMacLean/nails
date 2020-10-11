import React from 'react';
import * as Styles from './Testimonials.styles';
import { Image } from './index';

type PropsType = {};
const Testimonials = ({}: PropsType) => {
  return (
    <Styles.TestimonialsWrapper>
      <div className="review">
        <Image imageKey="annouk"></Image>
        <p className="quoteName">
          Annouk <br /> Founder aGizzles, Westerling-MacLean
          <br /> Waasmunster
        </p>
        <p className="quoteText">
          "Fabulous V draagt je op handen, in een ommedraai verzorgde handen.
          Veerle geeft mijn nagels de stijl die bij me past."
        </p>
      </div>
    </Styles.TestimonialsWrapper>
  );
};

export default Testimonials;
