import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import './checkbox.scss';
import { FormFieldErrors } from '../../models/form';

interface PassedProps {
  fieldTitle: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  testId: string;
  errors: FieldErrors<FieldValues>;
  requestedErrorMsg: string;
}

export const Checkbox = (props: PassedProps) => {
  const errors = props.errors[props.name] as FormFieldErrors | undefined;
  return (
    <div className="checkbox-wrapper">
      <div className="checkbox">
        <input
          type="checkbox"
          value={props.fieldTitle}
          className="checkbox-input"
          checked={props.checked}
          {...props.register(props.name, {
            required: props.requestedErrorMsg,
          })}
          onChange={() => props.setChecked((prev) => !prev)}
          data-testid={props.testId}
        />
        <div
          className="checkbox-text"
          data-testid="checkbox-text"
          onClick={() => props.setChecked((prev) => !prev)}
        >
          {props.fieldTitle}
        </div>
      </div>
      <div className={`input-field-error ${errors !== undefined ? 'active' : ''}`}>
        <img
          className="input-field-error-img"
          src="https://kornienkokostia.github.io/online-store/assets/images/icons/error.svg"
          alt="error"
        ></img>
        <span className="input-field-error-msg">{errors !== undefined ? errors.message : ''}</span>
      </div>
    </div>
  );
};
