import React, { Component, RefObject } from 'react';
import './input.scss';

interface PassedProps {
  childRef: RefObject<HTMLInputElement>;
  fieldName: string;
  typeName: 'text' | 'email' | 'number';
  validation: boolean;
  changeValidation: () => void;
  errorMsg: string;
  testId: string;
}
interface InputProps {
  inputFocused: boolean;
  valid: boolean;
}

export default class TextInput extends Component<PassedProps, InputProps> {
  constructor(props: PassedProps) {
    super(props);
    this.state = {
      inputFocused: false,
      valid: props.validation,
    };
  }

  handleFocus = () => {
    this.props.childRef.current?.value.length === 0
      ? this.setState({ inputFocused: !this.state.inputFocused })
      : false;
  };

  render() {
    return (
      <div className="input-field text-input">
        <input
          type={this.props.typeName}
          className={`input-field-input ${!this.props.validation ? 'error' : ''}`}
          ref={this.props.childRef}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
          onInput={() => {
            this.setState({ inputFocused: true });
            return this.props.changeValidation();
          }}
          data-testid={`${this.props.testId}`}
        />
        <span
          className={`input-field-title ${this.state.inputFocused ? 'active' : ''} ${
            !this.props.validation ? 'error' : ''
          }`}
        >
          {this.props.fieldName}
        </span>
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
