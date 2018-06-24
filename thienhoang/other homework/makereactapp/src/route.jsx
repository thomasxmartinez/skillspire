import React from 'react';
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from './app.js'


  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}></Route>
        </Router>
      </div>
    );
  }

