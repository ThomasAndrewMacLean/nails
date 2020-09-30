import React from 'react';
import * as Styles from './Footer.styles';
import { T, Image } from './';
type PropsType = { inModal: boolean };
const Footer = ({ inModal }: PropsType) => {
  return (
    <Styles.FooterWrapper inModal={inModal}>
      <address>
        <T translationKey="address"></T>
      </address>
      <div>
        <span className="whatsapp">
          <T translationKey="whatsUp"></T>
        </span>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/BeFabulousV"
              rel="noopener noreferrer"
            >
              <Image imageKey="facebook" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/befabulousv"
              rel="noopener noreferrer"
            >
              <Image imageKey="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </Styles.FooterWrapper>
  );
};

export default Footer;
