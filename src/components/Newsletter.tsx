import React, { useState } from 'react';
import * as Styles from './Newsletter.styles';
import { T, Button } from './';
type PropsType = {};
const Newsletter = ({}: PropsType) => {
  const [email, setEmail] = useState('');
  const [inscribed, setInscribed] = useState(false);
  const signUp = async (e: any) => {
    e.preventDefault();
    const mailChimpUrl =
      'https://fabulousv.us2.list-manage.com/subscribe/post?u=c3fe5ecfa5bcc71f46247ebd1&amp;id=ee28f037af';
    const fd = new FormData();
    fd.append('EMAIL', email);

    await fetch(mailChimpUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: fd,
    });

    setInscribed(true);
  };
  return (
    <Styles.NewsletterWrapper>
      <div className="left">
        <T translationKey="newsletter"></T>
        {inscribed ? (
          <div>
            <T translationKey="bedanktNewsletter"></T>
          </div>
        ) : (
          <form onSubmit={signUp}>
            <input
              placeholder="email"
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button>ok</Button>
          </form>
        )}
      </div>
      <div className="right">{/* <Image imageKey="v" /> */}</div>
    </Styles.NewsletterWrapper>
  );
};

export default Newsletter;
