import React from 'react';
import * as Styles from './Footer.styles';
import { T } from './';
type PropsType = { inModal: boolean };
const Footer = ({ inModal }: PropsType) => {
  return (
    <Styles.FooterWrapper inModal={inModal}>
      <address>
        <T translationKey="address"></T>
      </address>
      <div>
        <ul>
          <li className="whatsapp">What-s-up on</li>
          <li>
            <a target="_blank" href="#">
              <img src="./icon-facebook.svg" />
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <img src="./icon-instagram.svg" />
            </a>
          </li>
        </ul>
      </div>
    </Styles.FooterWrapper>
  );
};

export default Footer;
