import styled from 'styled-components';

export const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 1em 3em;
  font-weight: bold;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.brandPrimary};
  border: 0;
  border-radius: 1em;
  transition: 0.2s all ease-in;

  &.button-disabled {
    cursor: auto;
    background-color: ${(props) => props.theme.errorBgColor};
  }
`;
