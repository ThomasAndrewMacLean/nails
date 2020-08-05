import styled from 'styled-components';

export const HeroImageWrapper = styled.div<{ imgUrl: string }>`
  position: absolute;
  top: -4rem;
  left: 0;
  height: 60vh;
  overflow: hidden;
  width: 100vw;
  z-index: -1;

  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
