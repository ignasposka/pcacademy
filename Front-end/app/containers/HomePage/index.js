/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import TopBar from '../../components/TopBar';
import PublicHomePage from '../../components/PublicHomePage/PublicHomePage';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {isLoggedIn: false};

  render() {
    return(
      <>
        <TopBar title={this.props.title}/>
        {
          !this.state.isLoggedIn &&
        <div className={styles.publicHomePage}>
          <PublicHomePage/>
        </div>
        }
      </>
    );
  }
}

HomePage.propTypes = {
  title: PropTypes.string
};
