import styled from 'styled-components';

export const CardWrapper = styled.div<{ dark: boolean }>`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border-radius: 0px;
  min-height: 250px;
  color: ${(props) => props.dark && 'white'};
  background: ${(props) =>
    props.dark ? 'var(--background-dark)' : 'var(--background-light)'};
  p {
    margin-top: 1.5rem;
  }

  button {
    display: block;
    width: 100%;
    border-radius: 0;
    background: var(--background-highlight);
    color: white;
    margin-top: 2rem;
    padding: 1rem 0;
  }
`;
