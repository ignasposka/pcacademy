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
import Sidebar from '../../components/Sidebar/Sidebar';
import Banner from '../../components/Banner/Banner';
import SwitchElement from '../../components/Switch/Switch';
import Search from '../../components/Search/Search';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Sidebar title="Sidebar">
          <Banner url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
          <Banner url="https://cdn-images-1.medium.com/max/1600/1*J_-vtvcqV1-v14WqkPWhiQ.png" />
          <Banner url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />
          <Search />
        </Sidebar>
        <SwitchElement />
      </div>
    );
  }
}
