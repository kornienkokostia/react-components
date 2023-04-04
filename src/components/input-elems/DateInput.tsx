import React from 'react';
import './input.scss';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { FormFieldErrors } from '../../models/form';

interface PassedProps {
  name: string;
  fieldTitle: string;
  testId: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  requestedErrorMsg: string;
}

export const DateInput = (props: PassedProps) => {
  const errors = props.errors[props.name] as FormFieldErrors | undefined;
  return (
    <div className="input-field date-input">
      <input
        type="date"
        className={`input-field-input ${errors !== undefined ? 'error' : ''}`}
        {...props.register(props.name, {
          required: props.requestedErrorMsg,
        })}
        data-testid={`${props.testId}`}
      />
      <span className={`input-field-title active ${errors !== undefined ? 'error' : ''}`}>
        {props.fieldTitle}
      </span>
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
