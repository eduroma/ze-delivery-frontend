import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;

  .loading {
    color: #333;
    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 14px;
    text-align: center;

    padding: 8px;
  }
`
export const SearchInputContainer = styled.div`

  input {
    width: 400px;

    border: none;
    border-radius: 8px;

    color: #333;
    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 1rem;

    padding: 8px;
  }

  button {

    margin-left: 10px;

    color: #ffcd01;
    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 1rem;
    text-align: center;

    padding: 8px;

    background: transparent;

    border: none;
  }

`

export const CategoriesList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 12px;

  p {
    color: #333;
  }

`
export const CategoriesButton = styled.button`
  width: 140px;

  background: #FFF;

  color: #333;
  font-family: 'Roboto Slab';
  font-weight: 400;
  font-size: 1rem;
  text-align: center;

  padding: 8px;

  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 8px;

  & + button {
    margin-left: 8px;
  }
`

export const ProductsGrid = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap
`
