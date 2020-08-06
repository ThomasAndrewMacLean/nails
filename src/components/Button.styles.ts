import styled from 'styled-components';

export const LinkButton = styled.a`
  border-radius: 5px;

  background-color: white;
  padding: 8px 30px;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: all 250ms ease-out;

  &:hover {
    background: var(--background-dark);
    color: white;
  }
`;

export const NormalButton = styled.button`
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: white;
  padding: 8px 30px;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
