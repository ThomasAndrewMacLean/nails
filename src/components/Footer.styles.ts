import styled from 'styled-components';

export const FooterWrapper = styled.footer<{ inModal: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4rem 0;

  /* position: ${(props) => props.inModal && 'absolute'}; */
  width: ${(props) => props.inModal && '100%'};
  bottom: ${(props) => props.inModal && '0'};
  padding: ${(props) => props.inModal && '4rem'};

  p{
    line-height:1.5rem;
  }
  img {
    height: 18px;
    opacity: 0.8;
  }
  .socials{
    ul{
      padding-bottom:0;

    }
    li{
      padding-bottom:0;
    }
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
    display:flex;
    justify-content: flex-end;
margin-top:1rem;
li{
  margin-left:1rem;
}
  }

  a {
    text-decoration: none;
    color: inherit;
  }



  @media only screen and (max-width: 600px) {
    position: ${(props) => props.inModal && 'relative'};

    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;

address{
  margin-top:2rem
}
    ul{
      justify-content: center;
      margin-left:0
    }
  }
`;
