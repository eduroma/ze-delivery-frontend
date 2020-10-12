import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  justify-content: center;
`

export const StyledInput = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 10px;

  border-color: transparent;
  border-radius: 10px;

  background: #FFF;

  margin: 0 8px;

  position: absolute;
  top: 50%;

  display: flex;
  align-items: center;

  input {
    width: 100%;
    flex: 1;

    font-family: 'Roboto Slab';
    font-size: 1rem;
    line-height: 1.2rem;

    border: none;

    padding: 10px;
  }

`;

export const StyledSuggestions = styled.div`
  width: 100%;
  max-width: 560px;

  color: #333;
  font-family: 'Roboto Slab';
  font-size: 1rem;
  line-height: 1.2rem;

  position: absolute;
  top: calc(50% + 1.2rem + 44px );

  cursor: pointer;

  z-index: 10;
`
