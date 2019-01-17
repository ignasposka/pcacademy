
import React from 'react';
import styles from './style.css';
import WelcomeText from "../WelcomeText";

/* eslint-disable react/prefer-stateless-function */
export default class PublicHomePage extends React.PureComponent {
  render() {
    return [
      <div className={styles.welcomeText}>
        <WelcomeText/>
      </div>
    ];
  }
}
