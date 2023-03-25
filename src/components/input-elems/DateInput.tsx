import React, { Component, RefObject } from 'react';
import './input.scss';

interface PassedProps {
  childRef: RefObject<HTMLInputElement>;
  fieldName: string;
  testId: string;
}

export default class DateInput extends Component<PassedProps> {
  constructor(props: PassedProps) {
    super(props);
  }

  dateToday = (): string => {
    const curr = new Date();
    curr.setDate(curr.getDate());
    const date = curr.toISOString().substring(0, 10);
    return date;
  };

  render() {
    return (
      <div className="input-field date-input">
        <input
          type="date"
          className="input-field-input"
          ref={this.props.childRef}
          defaultValue={this.dateToday()}
          data-testid={`${this.props.testId}`}
        />
        <span className={`input-field-title active`}>{this.props.fieldName}</span>
      </div>
    );
  }
}
