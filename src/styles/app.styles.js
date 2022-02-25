import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  background-image: url('/images/app-screen-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.whiteColor};
  max-width: 520px;
  padding: 2em;
  margin: 1.5em auto;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(61, 61, 61, 0) 100%
    );
  }
`;

export const AppInner = styled.div`
  padding: 10% 7%;
`;
