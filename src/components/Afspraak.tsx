import React from 'react';
import * as Styles from './Afspraak.styles';

type PropsType = {};
const Afspraak = ({}: PropsType) => {
  return (
    <Styles.AfspraakWrapper id="maak-afspraak">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/thomas-maclean/afspraak?hide_event_type_details=1&primary_color=0f2d2f"
        style={{ minWidth: '320px', height: '1000px' }}
      ></div>
    </Styles.AfspraakWrapper>
  );
};

export default Afspraak;
