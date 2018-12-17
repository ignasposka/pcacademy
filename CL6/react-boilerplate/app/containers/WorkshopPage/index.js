import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Style from './style.css';

export default class WorkshopPage extends React.PureComponent {
  state = { name: '' };

  submitName = () => {
    console.log(this.props);
    this.props.history.push(`/styles/${this.state.name}`);
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <Input className={Style.allComponents} onchange={this.onInputChange} />
        <br />
        <Button className={Style.allComponents} click={this.submitName} />
      </div>
    );
  }
}
