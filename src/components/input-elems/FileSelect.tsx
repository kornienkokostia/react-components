import React, { Component, RefObject } from 'react';
import './input.scss';

interface PassedProps {
  childRef: RefObject<HTMLInputElement>;
  fieldName: string;
  validation: boolean;
  changeValidation: () => void;
  errorMsg: string;
}

export default class FileSelect extends Component<PassedProps> {
  constructor(props: PassedProps) {
    super(props);
  }

  render() {
    return (
      <div className="input-field file-input">
        <input
          type="file"
          className={`input-field-input ${!this.props.validation ? 'error' : ''}`}
          accept="image/*"
          ref={this.props.childRef}
          onChange={this.props.changeValidation}
        />
        <span className={`input-field-title active`}>{this.props.fieldName}</span>
        {!this.props.validation && (
          <div className="input-field-error">
            <img
              className="input-field-error-img"
              src="https://kornienkokostia.github.io/online-store/assets/images/icons/error.svg"
              alt="error"
            ></img>
            <span className="input-field-error-msg">{this.props.errorMsg}</span>
          </div>
        )}
      </div>
    );
  }
}
