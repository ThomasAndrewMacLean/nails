import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { T, FullWidthContainer, Button, Image, Hamburger } from '.';
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
        <Hamburger page={page} menuOpen={menuOpen} toggleMenu={toggleMenu} />

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
