import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import externalStyles from './styles.css';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 3
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});



class MediaItemList extends Component {

  componentDidMount(){
  }

  preventDefault(e){
    e.preventDefault();
    return false;
  }

  onDrop(e){
    e.preventDefault();

    const dt = e.dataTransfer;
    const {files} = dt;
    Array.from(files).forEach(file => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.addEventListener('loadend', () => {
        console.table(file)
      })
    });

    return false;
  }

  render(){
    const { classes } = this.props;
    return (
      <div
        className={externalStyles.mediaItemList}
        onDragOver={this.preventDefault}
        onDragEnter={this.preventDefault}
        onDrop={this.onDrop}
      >
        <Fab variant="extended" aria-label="Add" className={classes.fab}>
          <AddIcon className={classes.extendedIcon} />
        Add item
        </Fab>
      </div>
    );
  }
}

MediaItemList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaItemList);
