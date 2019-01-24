import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 3
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function MediaItemList(props) {
  const { classes } = props;
  return (
    <div>
      <Fab variant="extended" aria-label="Add" className={classes.fab}>
        <AddIcon className={classes.extendedIcon} />
        Add item
      </Fab>
    </div>
  );
}

MediaItemList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaItemList);