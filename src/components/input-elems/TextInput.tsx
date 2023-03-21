import React, { Component, RefObject } from 'react';
import './textInput.scss';

interface PassedProps {
  childRef: RefObject<HTMLInputElement>;
  fieldName: string;
}
interface InputProps {
  inputFocused: boolean;
}

export default class TextInput extends Component<PassedProps, InputProps> {
  constructor(props: PassedProps) {
    super(props);
    this.state = {
      inputFocused: false,
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
          type="text"
          className="input-field-input"
          ref={this.props.childRef}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
          onInput={() => this.setState({ inputFocused: true })}
        />
        <span className={`input-field-title ${this.state.inputFocused ? 'active' : ''}`}>
          {this.props.fieldName}
        </span>
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
