import React from 'react';
import './inputField.scss';

export default function InputField({
  type,
  value,
  onChange,
  name,
  label,
  placeholder,
}) {
  return (
    <>
      <div className="inputDiv">
        <label>{label}</label>
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
}
