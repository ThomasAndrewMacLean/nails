import React, { ReactNode } from 'react';
import * as Styles from './Button.styles';

type PropsType = { href?: string; children: ReactNode; style?: Object };
const Button = ({ href, children, style }: PropsType) => {
  if (href !== undefined && href !== null) {
    return (
      <Styles.LinkButton style={style} href={href}>
        {children}
      </Styles.LinkButton>
    );
  }

  return <Styles.NormalButton style={style}>{children}</Styles.NormalButton>;
};

export default Button;
