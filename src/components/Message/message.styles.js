import styled, { css } from 'styled-components';

export const MessageStyles = styled.div`
  padding: 0.5em 1em;
  flex-basis: max-content;
  margin-top: 1em;
  border-radius: 5px;

  ${(props) =>
    props.type !== 'Success' &&
    css`
      color: ${props.theme.brandPrimary};
      font-weight: bold;
      background-color: ${props.theme.errorBgColor};
      border-left: 10px solid ${props.theme.brandPrimary};
    `}
`;
