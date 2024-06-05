import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Outlet />
    <GlobalStyle />
  </>
);

export default App;
