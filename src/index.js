import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from '../src/Login/Login';
import Dashboard from './Dashboard/Dashboard';
import { ThemeProvider } from '@material-ui/core';
import {theme} from './theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
