import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import style from './styles.css';
const uuidv4 = require('uuid/v4');

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function Sidebar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Typography variant="h6" align="center">
          {props.title}
        </Typography>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="logo"
              className={classes.media}
              height="240"
              image="data:image/png;base64,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"
              title="Logo"
            />
          </CardActionArea>
        </Card>
        <Divider />
        {props.children.map(element => (
          <div key={uuidv4()} className={style.children}>
            {element}
          </div>
        ))}
        <Divider />
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.array,
};

export default withStyles(styles)(Sidebar);
