import React from 'react';
import * as Styles from './Newsletter.styles';
import { T, Button } from './';
type PropsType = {};
const Newsletter = ({}: PropsType) => {
  return (
    <Styles.NewsletterWrapper>
      <T translationKey="newsletter"></T>
      <form action="">
        <input
          placeholder="email"
          type="text"
          name="newsletter"
          id="newsletter"
        />
        <Button>ok</Button>
      </form>
    </Styles.NewsletterWrapper>
  );
};

export default Newsletter;
