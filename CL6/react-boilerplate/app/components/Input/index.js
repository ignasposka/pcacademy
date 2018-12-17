import React from 'react';
import Style from './style.css';

export default props => (
  <input
    onChange={props.onchange}
    className={Style.input}
    placeholder="Insert your name here"
  />
);
