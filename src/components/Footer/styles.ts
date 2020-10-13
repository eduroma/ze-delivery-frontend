import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  background: #333;

  margin-top: 20px;

  padding: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export const GridColumn = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  img {
    width: 260px;
  }

  h3 {
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 1rem;

    margin-bottom: 20px
  }

  a {
    color: #FFF;
    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 0.9rem;

    padding: 10px 0;

    cursor: pointer;

    text-decoration: none;

    img {
      width: 180px;
    }

  }

`

export const LinksContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 20px;

`
