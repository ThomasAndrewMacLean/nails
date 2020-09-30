import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 6rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }
  a {
    line-height: 2rem;
    font-size: 1rem;
    display: block;
    width: 100%;
    border-radius: 0;
    background: var(--background-highlight);
    color: white;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }

  .product0{
    margin-top: 4rem;
    padding-top:5rem;
  }

  .product1{
    margin-top:-12rem;
  }
  .product2{
    margin-top:-25rem;
    margin-left:0;
  }
  .product3{
    margin-left:0;
  }
  .niewsBrief{
    margin-top:-25rem;
  }
  strong {
    font-size: 1.5rem;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
