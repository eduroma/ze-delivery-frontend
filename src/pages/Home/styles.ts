import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  top: calc(50% + 1.2rem + 60px );

`
