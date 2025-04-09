import React from 'react';

import sytles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={sytles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
