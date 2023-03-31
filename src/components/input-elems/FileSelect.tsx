import React from 'react';
import './input.scss';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';
import { FormFieldErrors } from '../../models/form';

interface PassedProps {
  name: string;
  fieldTitle: string;
  requestedErrorMsg: string;
  testId: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const FileSelect = (props: PassedProps) => {
  const errors = props.errors[props.name] as FormFieldErrors | undefined;

  return (
    <div className="input-field file-input">
      <input
        className={`input-field-input ${errors !== undefined ? 'error' : ''}`}
        type="file"
        accept="image/*"
        {...props.register(props.name, {
          required: props.requestedErrorMsg,
        })}
        data-testid={props.testId}
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
