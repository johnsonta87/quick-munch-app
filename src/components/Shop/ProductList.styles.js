import styled from 'styled-components';

export const ProductListStyles = styled.div`
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    li {
      text-align: center;
      list-style: none;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
`;
