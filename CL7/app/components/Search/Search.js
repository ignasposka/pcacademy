import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Search extends Component {
  handleChange = value => {
    this.setState({ value });
  };

  state = { value: '' };

  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={this.state.value}
        onBlur={() => alert(this.state.value)}
        // onChange={this.handleChange()}
        margin="normal"
      />
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
