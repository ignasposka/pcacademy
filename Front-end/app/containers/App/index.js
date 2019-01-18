/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default class App extends Component {
    

  render(){
    return (
    <>
      <Switch>
        <Route exact path="/" component={() => <HomePage title='Space Saver'/>} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
    );
  }
}
