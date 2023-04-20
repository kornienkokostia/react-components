import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
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
          onClick={() => props.setChecked((prev) => !prev)}
          data-testid={props.testId}
        />
        {props.checked && (
          <div className="checkbox-input-checked">
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="checkbox-input-checked-img"
            >
              <path
                d="M4.8368 10.6757C5.2573 10.6757 5.6234 10.4671 5.8725 10.0806L11.1141 1.89317C11.262 1.63981 11.4038 1.36723 11.4038 1.10309C11.4038 0.516691 10.8844 0.126221 10.3332 0.126221C9.9896 0.126221 9.6713 0.330601 9.4233 0.716851L4.7963 8.15026L2.61846 5.37296C2.33088 5.00216 2.05409 4.88736 1.70065 4.88736C1.13557 4.88736 0.680176 5.34596 0.680176 5.92066C0.680176 6.20376 0.789866 6.45836 0.983456 6.71266L3.75425 10.0891C4.0683 10.4885 4.4121 10.6757 4.8368 10.6757Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        )}

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
