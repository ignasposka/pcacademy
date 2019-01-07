import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function SwitchElement() {
  return (
    <FormControlLabel
      control={
        <Switch
          checked
          //   onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
      }
      label="Primary"
    />
  );
}
