import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { T, FullWidthContainer, Button, Image, Hamburger, Footer } from '.';
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
      body!.style.height = 'calc(100vh - 1rem)';
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
          <style></style>
        </Head>
      )}
      <Header>
        <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />

        <a href={prefix + '/'} className="titleWrapMain">
          <span className="white">
            <Image
              imageKey="logo-single-page"
              style={{ width: '80vw', maxWidth: '375px' }}
            ></Image>
          </span>
          {/* <T translationKey="subTitle"></T> */}
        </a>
        {menuOpen && (
          <nav ref={refMenu}>
            <div className="titleWrap menuOpen">
              <div>
                <Image
                  imageKey="logo-single-page"
                  style={{ width: '375px' }}
                ></Image>
              </div>
              <div>{/* <T translationKey="subTitle"></T> */}</div>
            </div>
            <ul className="menu-links">
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
            <Footer inModal={true}></Footer>
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
          <Footer inModal={false}></Footer>
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
    .menuOpen {
      h2 {
        color: var(--background-dark) !important;
      }
    }
    .menu-links {
      z-index: 999;
      position: relative;
      a {
        background: white;
        width: 300px;
        border: 2px solid var(--background-dark);
        color: var(--text-dark);
        text-align: center;
        font-size: 20px;
        transition: all 350ms ease;
      }

      a:hover {
        background: var(--background-dark);
        color: white;
      }
      li:last-child {
        // push afspraak bit away from the rest
        padding-top: 2rem;
      }
    }
    .titleWrap {
      padding: 4rem;
      padding-top: 10rem;
      position: absolute;
      // background: white;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
    }
  }
  .menu-links {
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

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
