import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  position: relative;
  background-image: url('/images/app-screen-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.whiteColor};
  padding: 10% 7%;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(61, 61, 61, 0) 100%
    );
  }

  .guest-subtext {
    position: relative;
    margin-top: 1em;
    font-size: ${(props) => props.theme.f6};
    color: ${(props) => props.theme.whiteColor};
    z-index: 1;

    button {
      background: transparent;
      border: 0;
      font-size: ${(props) => props.theme.f6};
      color: ${(props) => props.theme.whiteColor};
      padding: 0;
      cursor: pointer;
      font-weight: bold;
      transition: 0.2s all ease-in;

      &:hover {
        color: ${(props) => props.theme.brandPrimary};
      }
    }
  }
`;

export const AuthenticationStyles = styled.form`
  display: flex;
  margin-top: 25vh;
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
