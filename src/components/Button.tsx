import React, { ReactNode } from 'react';
import * as Styles from './Button.styles';

type PropsType = { href?: string; children: ReactNode };
const Button = ({ href, children }: PropsType) => {
  if (href) {
    return <Styles.LinkButton href={href}>{children}</Styles.LinkButton>;
  }
};

export default Button;
