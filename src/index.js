import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './pages/Login/App';
import Home from './pages/Home/index';

ReactDOM.render(
  <BrowserRouter>

    <Switch>

    <Route path="/" component={App} exact />

    <Route path="/home" component={Home} />    

    </Switch>    

  </BrowserRouter>,

  document.getElementById('root')
);
