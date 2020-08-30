import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { T, FullWidthContainer, Button } from '.';
import { InnerContainer } from '../styles/container';
import { prefix } from '../utils';
import { pages } from '../constants/pages';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const refMenu = useRef(null);

  const toggleMenu = () => {
    const body = document.querySelector('body');
    if (menuOpen) {
      body!.style.height = 'auto';
      body!.style.overflowY = 'inherit';
    } else {
      body!.style.height = '100vh';
      body!.style.overflowY = 'hidden';
    }

    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (refMenu && refMenu.current) {
      // @ts-ignore
      refMenu.current.style.opacity = '1';
    }
  }, [refMenu, refMenu.current, menuOpen]);
  return (
    <Main>
      <Header>
        <div>
          <T translationKey="title"></T>
          <T translationKey="subTitle"></T>
        </div>
        <span className="menu" onClick={toggleMenu}>
          🍔
        </span>
        {menuOpen && (
          <nav ref={refMenu}>
            <div className="titleWrap">
              <T translationKey="title"></T>
              <T translationKey="subTitle"></T>
            </div>
            <ul>
              {pages
                .filter((p) => p.showInNav)
                .map((pag, i) => {
                  return (
                    <li key={i}>
                      <Button href={prefix + pag.url}>
                        <T translationKey={pag.id + 'Title'}></T>
                      </Button>
                    </li>
                  );
                })}
            </ul>
          </nav>
        )}
      </Header>
      {children}
      <FullWidthContainer textColor="white" backgroundColor="var(--text-dark)">
        <InnerContainer>
          <Footer>
            <address>
              <T translationKey="address"></T>
            </address>
            <div>
              <ul>
                <li>
                  <a href="#">facebook</a>
                </li>
                <li>
                  <a href="#">linkedin</a>
                </li>
              </ul>
            </div>
          </Footer>
        </InnerContainer>
      </FullWidthContainer>
    </Main>
  );
};

const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 900px;
`;
const Header = styled.header`
  h1 {
    font-weight: 100;
    font-size: 5rem;
    letter-spacing: 2px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 700;
  }
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  /* margin-top: 2rem; */
  background-color: #ffffffaa;
  .menu {
    position: absolute;
    right: 2rem;
    top: 4rem;
    z-index: 99;
  }
  nav {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--background-light);
    z-index: 9;
    transition: opacity 200ms ease-out;
    h2 {
      text-align: left;
    }
    .titleWrap {
      padding: 4rem;
      position: absolute;
      background: white;
      width: 100vw;
    }
  }
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    li {
      margin: 0 1rem;
    }
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: unset;
  position: relative;
  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    width: 100%;
    height: 3px;
    background: black;
  }
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  ul {
    text-align: right;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
