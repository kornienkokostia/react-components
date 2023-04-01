import React from 'react';
import './input.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

interface PassedProps {
  name: string;
  fieldTitle: string;
  options: string[];
  testId: string;
  register: UseFormRegister<FieldValues>;
}

export const Dropdown = (props: PassedProps) => {
  return (
    <div className="input-field dropdown-input">
      <select
        className="input-field-input"
        {...props.register(props.name)}
        data-testid={`${props.testId}`}
      >
        {props.options.map((el, i) => (
          <option value={el} key={i}>
            {el}
          </option>
        ))}
      </select>
      <span className={`input-field-title active`}>{props.fieldTitle}</span>
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dropdown-input-icon"
      >
        <path
          d="M9.89055 11.5606C10.5042 12.1465 11.5007 12.1465 12.1144 11.5606L21.5398 2.56239C22.1534 1.97657 22.1534 1.02519 21.5398 0.439367C20.9261 -0.146456 19.9296 -0.146456 19.316 0.439367L11 8.37844L2.68403 0.444053C2.0704 -0.14177 1.07386 -0.14177 0.460225 0.444053C-0.153408 1.02988 -0.153408 1.98125 0.460225 2.56708L9.88564 11.5653L9.89055 11.5606Z"
          fill="#86868B"
        />
      </svg>
    </div>
  );
};
