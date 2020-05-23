import React, { Fragment } from "react";

const GenderSelector = ({ options, value, onChange }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <Fragment key={`gender-option-${option.value}`}>
            <input
              type="radio"
              value={option.value}
              checked={option.value === value}
              name="gender"
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </Fragment>
        );
      })}
    </>
  );
};

export default GenderSelector;
