import React, { ReactNode } from 'react';
import * as Styles from './InnerContainer.styles';

type PropsType = {
  children: ReactNode;
};
const InnerContainer = ({ children }: PropsType) => {
  return (
    <Styles.InnerContainerWrapper>{children}</Styles.InnerContainerWrapper>
  );
};

export default InnerContainer;
