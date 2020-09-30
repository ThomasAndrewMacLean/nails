import React from 'react';
import * as Styles from './Newsletter.styles';
import { T, Button } from './';
type PropsType = {};
const Newsletter = ({}: PropsType) => {
  return (
    <Styles.NewsletterWrapper>
      <div className="left">
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
      </div>
      <div className="right">{/* <Image imageKey="v" /> */}</div>
    </Styles.NewsletterWrapper>
  );
};

export default Newsletter;
