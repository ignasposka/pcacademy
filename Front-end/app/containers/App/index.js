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

import PropTypes from 'prop-types';
import GlobalStyle from '../../global-styles';

export default class App extends Component {

  state = {title: 'Space Saver'}

  componentDidMount(){
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render(){
    return (
    <>
      <Switch>
        <Route exact path="/" component={() => <HomePage title={this.state.title}/>} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired
};
