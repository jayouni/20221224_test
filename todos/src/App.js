import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import Todos from './components/Todos';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <Block >
      <GlobalStyle />
      <Todos />
    </Block>
  );
}

const Block = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #f2f2f2;
`

export default App;
