import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  background: #FFF;

  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 8px;

  margin: 10px 5px;
`;

export const NameContainer = styled.div`

  width: 100%;
  height: calc(1rem * 3 + 8px);

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    height: 100%;

    color: #333;
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1rem;
    text-align: center;

    border-bottom: 1px solid #f3f3f3;

    padding: 10px;

    flex: 1;
    }
`;

export const PriceContainer = styled.div`
  width: 100%;

  p {
    color: #333;
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 0.8rem;
    text-align: center;

    padding: 10px;

  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1.2px solid #f3f3f3;

  img {
    width: 96px;
    height: 96px;

    border-radius: 8px;

    margin: 5px;
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  border-top: 1px solid #f3f3f3;

  button {
    width: 60px;

    color: #333;
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 0.8rem;
    text-align: center;

    border: none;

    background: #f3f3f3;

  }

  span {
    flex: 1;

    color: #333;
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 0.8rem;
    text-align: center;
  }

`;

