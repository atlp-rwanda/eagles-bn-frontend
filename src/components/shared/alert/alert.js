import React from 'react';
import './alert.scss';

function Alert({ children, type }) {
  return (
    <div className={`alert alert-${type}`}>
      {children}
    </div>
  );
}
export default Alert;
