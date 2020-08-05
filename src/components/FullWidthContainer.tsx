import React, { ReactNode } from 'react';
import * as Styles from './FullWidthContainer.styles';
type PropsType = {
  backgroundColor: string;
  textColor: string;
  children: ReactNode;
  style?: object;
};
const FullWidthContainer = ({
  backgroundColor,
  textColor,
  children,
  style,
}: PropsType) => {
  return (
    <Styles.FullWidthContainerWrapper
      style={style}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </Styles.FullWidthContainerWrapper>
  );
};

export default FullWidthContainer;
