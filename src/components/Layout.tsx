import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { T, FullWidthContainer, Button, Image } from '.';
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
      {page === 'afspraak' && (
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `body{
            background: var(--background-dark);
          }
          h2{
            color: white !important;

          }
          .white img{
            filter: invert(1);
          }
          `,
            }}
          ></style>
        </Head>
      )}
      <Header>
        <div
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
        </div>
        <a href={prefix + '/'} className="titleWrapMain">
          <span className="white">
            <Image imageKey="logo-zwart" style={{ width: '375px' }}></Image>
          </span>
          <T translationKey="subTitle"></T>
        </a>
        {menuOpen && (
          <nav ref={refMenu}>
            <div className="titleWrap">
              <div>
                <Image imageKey="logo-zwart" style={{ width: '375px' }}></Image>
              </div>
              <div>
                <T translationKey="subTitle"></T>
              </div>
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
      <span className="white">
        <Image
          imageKey="logo-small"
          style={{ display: 'block', margin: '1rem auto 5rem' }}
        ></Image>
      </span>
      <FullWidthContainer textColor="var(--text-dark)" backgroundColor="white">
        <InnerContainer>
          <Footer>
            <address>
              <T translationKey="address"></T>
            </address>
            <div>
              <ul>
                <li className="whatsapp">What-s-up on</li>
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
    font-size: 1.3rem;
    margin-top: 2.4rem;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 700;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  /* margin-top: 2rem; */

  .menu {
    z-index: 99;
    transform: scale(0.5);
    #nav-icon1,
    #nav-icon2,
    #nav-icon3,
    #nav-icon4 {
      width: 60px;
      height: 45px;
      position: relative;
      margin: 50px auto;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    #nav-icon1 span,
    #nav-icon3 span,
    #nav-icon4 span {
      display: block;
      position: absolute;
      height: 9px;
      width: 100%;

      background: var(--background-highlight);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
    #nav-icon3 span.white {
      background: white !important;
    }
    #nav-icon3 span:nth-child(1) {
      top: 0px;
    }

    #nav-icon3 span:nth-child(2),
    #nav-icon3 span:nth-child(3) {
      top: 18px;
    }

    #nav-icon3 span:nth-child(4) {
      top: 36px;
    }

    #nav-icon3.open span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }

    #nav-icon3.open span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    #nav-icon3.open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    #nav-icon3.open span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
  .titleWrapMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
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

    a {
      background: var(--background-dark);
      width: 300px;
      color: white;
    }
    .titleWrap {
      padding: 4rem;
      padding-top: 8rem;
      position: absolute;
      // background: white;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  ul {
    flex-direction: column;
    display: flex;
    list-style: none;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin-top: 35vh;
    li {
      margin: 0 1rem;
    }
  }
`;

// const NavLink = styled.a<{ active: boolean }>`
//   text-decoration: none;
//   color: unset;
//   position: relative;
//   &:after {
//     content: '';
//     display: ${(props) => (props.active ? 'block' : 'none')};
//     width: 100%;
//     height: 3px;
//     background: black;
//   }
// `;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  .whatsapp {
    font-size: 1.4rem;
    font-family: 'Playfair Display', serif;
  }
  address {
    font-style: inherit;
  }

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
