import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
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
    background: var(--background-dark);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background: var(--background-dark);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;
