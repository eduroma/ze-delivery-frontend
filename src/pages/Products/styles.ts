import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
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
  font-size: 14px;
  text-align: center;

  padding: 8px;

  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 8px;

  & + button {
    margin-left: 8px;
  }
`

export const ProductsGrid = styled.div`

  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap: wrap
`

export const ProductsCard = styled.div`
  width: 200px;

  background: #FFF;

  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 8px;

  margin: 10px 5px;

  .image-container {
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
  }

  .name-container {

    width: 100%;

    p {
      color: #333;
      font-family: 'Roboto Slab';
      font-weight: 600;
      font-size: 14px;
      text-align: center;

      margin-top: 10px;

      padding: 10px;
    }
  }




`
