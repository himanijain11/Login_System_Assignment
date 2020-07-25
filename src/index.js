import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme'
import { BrowserRouter, Switch, Route } from 'react-router-dom';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

