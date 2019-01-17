import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const styles = {
  root: {
    padding: '40px',
    background: 'white',
    width: '80%',
    margin: '0 auto',
    opacity: '0.7',
    fontWeight: '600',
    color: 'black'
  }
};

const WelcomeText = (props) => {
  const { classes, className } = props;
  return (
    <Typography className={classNames(classes.root, className)} component="h2" variant="h2" gutterBottom align='center' color='inherit'>
  Your photos in one single place
    </Typography>
  );
}
export default withStyles(styles)(WelcomeText);

WelcomeText.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};
