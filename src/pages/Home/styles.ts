import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

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

    position: absolute;
    top: 10px;
  }
`;


export const InputContainer = styled.div`
  width: 100%;
  height: 464px;

  background-image: url(https://courier-images-web.imgix.net/static/img/img-welcome-bg.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png);
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: auto 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  h1 {
    max-width: 600px;

    color:#333;
    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.2rem;
    text-align: center;

    margin-bottom: 60px;

    strong {
      font-weight: 600;
    }

    p {
      color:#333;
      font-family: 'Roboto Slab';
      font-weight: 400;
      font-size: 1rem;
      text-align: center;

      padding: 10px;
    }

  }

`
export const SendButton = styled.button`
  background: #ffcd01;

  color:#333;
  font-family: 'Roboto Slab';
  font-weight: 600px;
  font-size: 1.2rem;

  border-radius: 8px;
  border: none;

  padding: 5px 10px;

  position: absolute;
  bottom: 40px;
`

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color:#333;
    font-family: 'Roboto Slab';
    font-weight: 600px;
    font-size: 1.4rem;

    padding: 20px 0;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

`

export const InfoColumn = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
  }

  h3 {
    color:#333;
    font-family: 'Roboto Slab';
    font-weight: 600px;
    font-size: 1.1rem;

    padding: 20px 0;
  }

  p {
    width: 80%;

    color:#666;
    font-family: 'Roboto Slab';
    font-weight: 400px;
    font-size: 1rem;
    line-height: 1.2rem;
    text-align: center;

    padding: 20px;
  }


`
