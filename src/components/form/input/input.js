import React from "react";
import "./input.scss";

export const FormInput = ({
  type,
  invalid,
  label,
  changed,
  value,
  errMessage,
  required,
  placeholder,
}) => (
  <div className="form-group">
    {label && label.trim() !== '' ? <label htmlFor="input">{label}</label> : ''}
    <input
      type={type}
      className={`form-control ${invalid ? 'input-invalid' : ''}`}
      onChange={() => changed(event)}
      required={required}
      placeholder={placeholder && placeholder.trim() !== '' ? placeholder : ''}
      value={value}
      id="input"
    />
    {errMessage && errMessage.trim() !== '' ? (
      <span className="text-invalid">{errMessage}</span>
    ) : (
      ''
    )}
  </div>
);
