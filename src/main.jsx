import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle ,ThemeProvider} from "styled-components";
import App from './App';
import Timer from './components/Timer/Timer';
import StateProvider from './components/StateProvider';
const GlobalStyle= createGlobalStyle`
*{
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}
html,body{
    background-color: ${(props) => props.theme.colors.bg};
    font-size: 62.5%;

  }
  body{
    font-size: 1.6rem;
    color:white;
  }
`;
// ReactDOM.render(
//   <React.StrictMode>
//       <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const theme={
  colors:{
    Primary:"#b85600",
    secondry:"#08002b",
    bg:"#220845",
  },
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);
