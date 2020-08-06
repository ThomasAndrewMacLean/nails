import styled from 'styled-components';

export const FullWidthContainerWrapper = styled.div<{
  backgroundColor: string;
  textColor: string;
}>`
  width: 100vw;
  margin-left: calc(-50vw + 450px);
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};

  @media (max-width: 1000px) {
    margin-left: -5vw;
  }
`;
