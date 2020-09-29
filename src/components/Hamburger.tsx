import React from 'react';
import * as Styles from './Hamburger.styles';

type PropsType = { page: string; toggleMenu: any; menuOpen: boolean };
const Hamburger = ({ page, toggleMenu, menuOpen }: PropsType) => {
  return (
    <Styles.HamburgerWrapper className={'menu'} onClick={toggleMenu}>
      <div id="nav-icon3" className={menuOpen ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Styles.HamburgerWrapper>
  );
};

export default Hamburger;
