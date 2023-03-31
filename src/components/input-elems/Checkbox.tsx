import React, { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import './checkbox.scss';

interface PassedProps {
  fieldTitle: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  testId: string;
}

export const Checkbox = (props: PassedProps) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        value={props.fieldTitle}
        className="checkbox-input"
        checked={props.checked}
        {...props.register(props.name)}
        onChange={() => props.setChecked((prev) => !prev)}
        data-testid={props.testId}
      />
      <div className="checkbox-text" onClick={() => props.setChecked((prev) => !prev)}>
        {props.fieldTitle}
      </div>
    </div>
  );
};
