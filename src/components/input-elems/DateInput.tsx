import React, { Component, RefObject } from 'react';
import './input.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

interface PassedProps {
  name: string;
  fieldTitle: string;
  testId: string;
  register: UseFormRegister<FieldValues>;
}

export const DateInput = (props: PassedProps) => {
  const dateToday = (): string => {
    const curr = new Date();
    curr.setDate(curr.getDate());
    const date = curr.toISOString().substring(0, 10);
    return date;
  };

  return (
    <div className="input-field date-input">
      <input
        type="date"
        className="input-field-input"
        defaultValue={dateToday()}
        {...props.register(props.name)}
        data-testid={`${props.testId}`}
      />
      <span className={`input-field-title active`}>{props.fieldTitle}</span>
    </div>
  );
};
