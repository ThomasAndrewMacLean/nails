import styled from 'styled-components';

export const HeroImageWrapper = styled.div<{ imgUrl: string }>`
  height: 50vh;
  overflow: hidden;
  width: 100vw;
  z-index: -1;

  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
