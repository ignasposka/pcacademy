import React from 'react';

export default class StylesPage extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <header>{this.props.match.params.name}</header>
      </div>
    );
  }
}
