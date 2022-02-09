import React from "react";

const Select = ({ nameDefault,  name,  options, idKey, nameKey, ...rest }) => {
  return (
      <select name={name} id={name} {...rest} >
        <option value="" >{nameDefault}</option>
        {options.map(option => (
          <option key={option[idKey]} value={option[idKey]}>
            {option[nameKey]}
          </option>
        ))}
      </select>
  );
};

export default Select;