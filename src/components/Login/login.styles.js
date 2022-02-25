import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  margin-top: 15vh;
  flex-direction: column;
  position: relative;
  z-index: 2;

  input {
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1em;
    border: 0;
    background-color: ${(props) => props.theme.lightGrayColor};
  }
`;
