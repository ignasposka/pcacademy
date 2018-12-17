import React from 'react';
import Style from './style.css';

export default props => (
  <button onClick={props.click} type="submit" className={Style.button}>
    SUBMIT
  </button>
);
