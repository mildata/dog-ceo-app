import React from 'react';

const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option, i) => (
            <option value={option.value} key={`${options.breed}-${i}`}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };
export default Dropdown;
