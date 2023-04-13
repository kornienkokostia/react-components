import React from 'react';
import './switcher.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

interface PassedProps {
  name: string;
  fieldTitle: string;
  radioValOne: string;
  radioValTwo: string;
  testIdOne: string;
  testIdTwo: string;
  register: UseFormRegister<FieldValues>;
  checkedVal: boolean;
  setCheckedVal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Switcher = (props: PassedProps) => {
  return (
    <div className="switcher">
      <div className="switcher-content">
        <label className="switcher-toggler" data-testid="switcher-toggler">
          <div className={`bg-checkbox ${props.checkedVal ? 'active' : ''}`}></div>
          <i></i>
        </label>

        <input
          type="radio"
          className="switcher-input"
          {...props.register(props.name)}
          value={props.radioValOne}
          checked={!props.checkedVal}
          onChange={() => props.setCheckedVal((prev) => !prev)}
          data-testid={props.testIdOne}
        />
        <input
          type="radio"
          className="switcher-input"
          {...props.register(props.name)}
          value={props.radioValTwo}
          checked={props.checkedVal}
          onChange={() => props.setCheckedVal((prev) => !prev)}
          data-testid={props.testIdTwo}
        />

        <p className="switcher-title" data-testid="send-notif">
          {props.fieldTitle}
        </p>
      </div>
    </div>
  );
};
