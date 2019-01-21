/**
 *
 * ListPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import saga from './saga';
import reducer from './reducer';
import makeSelectListPage from './selectors';
import { getPosts } from './actions';

/* eslint-disable react/prefer-stateless-function */
class ListPage extends React.Component {
  state = {
    age: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;
    console.log(this.props);
    return (
      <>
        <form autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
              style={{ width: '250px' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {posts &&
                posts.map(post => (
                  <MenuItem key={post.id} value={post.id}>
                    {post.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </form>
      </>
    );
  }
}

ListPage.propTypes = {
  getPosts: PropTypes.func,
  posts: PropTypes.array,
};

const mapStateToProps = makeSelectListPage();

function mapDispatchToProps(dispatch) {
  return {
    getPosts: () => dispatch(getPosts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listPage', reducer });
const withSaga = injectSaga({ key: 'listPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListPage);
