import React, { Component, RefObject } from 'react';

interface PassedProps {
  childRef: RefObject<HTMLInputElement>;
  fieldName: string;
}

export default class DateInput extends Component<PassedProps> {
  constructor(props: PassedProps) {
    super(props);
  }

  render() {
    return (
      <div className="input-field date-input">
        <input type="date" className="input-field-input" ref={this.props.childRef} />
        <span className={`input-field-title active`}>{this.props.fieldName}</span>
        <div className="input-field-error">
          <img
            className="input-field-error-img"
            src="https://kornienkokostia.github.io/online-store/assets/images/icons/error.svg"
            alt="error"
          ></img>
          <span className="input-field-error-msg">
            Please enter a valid first name (&gt;2 characters).
          </span>
        </div>
      </div>
    );
  }
}
