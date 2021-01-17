import React from 'react';
import './button.scss';

const Button = (props) => (
  <button className="btn" onClick={props.handleSubmit}>
    {props.content}
  </button>
);

export default Button;
