import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { T, FullWidthContainer, InnerContainer } from '.';
import { prefix } from '../utils';
import { pages } from '../constants/pages';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Main>
      <Header>
        <div>
          <T translationKey="title"></T>
          <T translationKey="subTitle"></T>
        </div>
        {/* <nav>
          <ul>
            {pages
              .filter((p) => p.showInNav)
              .map((pag, i) => {
                return (
                  <li key={i}>
                    <NavLink active={page === pag.id} href={prefix + pag.url}>
                      <T translationKey={pag.id + 'Title'}></T>
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </nav> */}
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
  padding: 4rem 0;
  margin-top: 2rem;
  background-color: #ffffffaa;
  nav {
  }
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;

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
