import React from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form/dist/types';
import './input.scss';
import { FormFieldErrors } from '../../models/form';

interface PassedProps {
  name: string;
  fieldTitle: string;
  typeName: 'text' | 'email' | 'number';
  filedValid: RegExp;
  requestedErrorMsg: string;
  patternErrorMsg: string;
  testId: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  inputFocused: boolean;
  setInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TextInput = (props: PassedProps) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.currentTarget.value.length === 0 ? props.setInputFocused((prev) => !prev) : false;
  };

  const errors = props.errors[props.name] as FormFieldErrors | undefined;

  return (
    <div className="input-field text-input">
      <input
        className={`input-field-input ${errors !== undefined ? 'error' : ''}`}
        type={props.typeName}
        {...props.register(props.name, {
          required: props.requestedErrorMsg,
          pattern: {
            value: props.filedValid,
            message: props.patternErrorMsg,
          },
        })}
        onFocus={handleFocus}
        onBlur={handleFocus}
        onInput={() => props.setInputFocused(true)}
        data-testid={props.testId}
        autoComplete="nope"
      />
      <span
        className={`input-field-title ${props.inputFocused ? 'active' : ''} ${
          errors !== undefined ? 'error' : ''
        }`}
      >
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
