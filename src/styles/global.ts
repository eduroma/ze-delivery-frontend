import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}

html, body {
  height: 100%;
  width: 100%;
}

body {
  background:#FAFAFA;
  color: #FFF;
  -webkit-font-smoothing: antialiased;

  display: flex;
  flex-direction: column;
}

body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}


`;
