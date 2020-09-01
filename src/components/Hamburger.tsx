import React from 'react';
import * as Styles from './Hamburger.styles';

type PropsType = { page: string; toggleMenu: any; menuOpen: boolean };
const Hamburger = ({ page, toggleMenu, menuOpen }: PropsType) => {
  return (
    <Styles.HamburgerWrapper
      className={page === 'afspraak' ? 'menu white' : 'menu'}
      onClick={toggleMenu}
    >
      <div id="nav-icon3" className={menuOpen ? 'open' : ''}>
        <span
          className={page === 'afspraak' && !menuOpen ? 'white' : ''}
        ></span>
        <span
          className={page === 'afspraak' && !menuOpen ? 'white' : ''}
        ></span>
        <span
          className={page === 'afspraak' && !menuOpen ? 'white' : ''}
        ></span>
        <span
          className={page === 'afspraak' && !menuOpen ? 'white' : ''}
        ></span>
      </div>
    </Styles.HamburgerWrapper>
  );
};

export default Hamburger;
