import styled from 'styled-components';

export const FooterWrapper = styled.footer<{ inModal: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  position: ${(props) => props.inModal && 'absolute'};
  width: ${(props) => props.inModal && '100%'};
  bottom: ${(props) => props.inModal && '0'};
  padding: ${(props) => props.inModal && '4rem'};

  img {
    height: 25px;
    opacity: 0.8;
  }
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
