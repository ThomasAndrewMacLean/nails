import React, { useContext } from 'react';
import * as Styles from './HeroImage.styles';
import { PictureContext } from '../utils/contexts';

import { FullWidthContainer, Image } from './';
import { getImageUrl } from '../utils';

type PropsType = {};
const HeroImage = ({}: PropsType) => {
  const pics = useContext(PictureContext);
  const imgUrl = getImageUrl(pics, 'hero-image', true);

  return (
      <FullWidthContainer backgroundColor="white" textColor="var(--text-dark)">
    <Styles.HeroImageWrapper imgUrl={imgUrl}>
       
    </Styles.HeroImageWrapper>
      </FullWidthContainer>
  );
};

export default HeroImage;
