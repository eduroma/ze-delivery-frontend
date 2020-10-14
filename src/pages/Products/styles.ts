import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items:center;

  .error-text {
    max-width: 600px;

    background-color: rgba(255,255,255,0.2);

    color:#660000;
    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    text-align: center;

    padding: 10px;
  }

`
export const SearchInputContainer = styled.div`

  width: 100%;
  max-width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;


  input {

    flex: 1;

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

    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

`
export const CategoriesList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin: 12px;
  margin-bottom: 4px;

  p {
    color: #333;
  }
`

interface CategoriesButtonProps {
  selected: boolean;
}

export const CategoriesButton = styled.button<CategoriesButtonProps>`
  width: 140px;

  background: ${props => props.selected ? '#CCC' : '#FFF'};

  color: #333;
  font-family: 'Roboto Slab';
  font-weight: 400;
  font-size: 1rem;
  text-align: center;

  padding: 8px;

  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 8px;

  margin-bottom: 8px;

  transition: opacity 0.2s;

  & + button {
    margin-left: 8px;
  }

  &:hover {
    opacity: 0.6;
  }

`

export const ProductsGrid = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap
`
