import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonList from './components/PersonList';
import Clock from './components/Clock';
import Footer from './components/Footer';

import personListData from './data.json';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography className='App' variant="h6" color="inherit">
              React <span role='img'>👌</span>
            </Typography>
          </Toolbar>
          <Clock />
        </AppBar>
        <PersonList list={personListData} />
      </div>
    );
  }
}

export default App;
