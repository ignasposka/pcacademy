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
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import PropTypes from 'prop-types';
import GlobalStyle from '../../global-styles';
import TopBar from '../../components/TopBar';
import PublicHomePage from '../../components/PublicHomePage/PublicHomePage';
import styles from './style.css';
import LoginCallback from '../../components/LoginCallback';

export default class App extends Component {

  componentDidMount(){
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  state = {title: 'Space Saver'}

  handleAuthentication = (nextState) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  }

  render(){
    return (
    <>
      <Switch>
        <Route
          exact path="/" component={() =>
            <>
            <TopBar title={this.state.title}/>
            {
              !this.props.auth.isAuthenticated() &&
        <div className={styles.publicHomePage}>
          <PublicHomePage/>
        </div>
            }
            </>
          } />
        <Route
          path="/loginCallback" render={(props) => {
            this.handleAuthentication(props);
            return <LoginCallback {...props} />
          }}/>
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
