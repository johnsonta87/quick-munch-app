import styled from 'styled-components';

export const NavShopStyles = styled.div`
  > ul {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    li {
      display: flex;
      justify-content: center;
    }
  }
`;
