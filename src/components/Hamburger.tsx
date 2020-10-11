import React, { useState, useEffect } from 'react';
import * as Styles from './Hamburger.styles';

type PropsType = { toggleMenu: any; menuOpen: boolean };
const Hamburger = ({ toggleMenu, menuOpen }: PropsType) => {
  const [openMenuWithDelay, setOpenMenuWithDelay] = useState(menuOpen);

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setOpenMenuWithDelay(menuOpen);
      }, 300);
    } else {
      setOpenMenuWithDelay(menuOpen);
    }
  }, [menuOpen]);
  return (
    <Styles.HamburgerWrapper
      menuOpen={openMenuWithDelay}
      className={'menu'}
      onClick={toggleMenu}
    >
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
