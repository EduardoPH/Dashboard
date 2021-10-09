import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import Box from './components/box-values/index'

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Box tittle="testando" grafico="grafico" tittleOne="opaaa"/>
  </React.StrictMode>,
  document.getElementById('root')
);

