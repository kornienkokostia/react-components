import React, { Component, RefObject } from 'react';
import './checkbox.scss';

interface PassedProps {
  childRef: RefObject<HTMLInputElement>;
  fieldTitle: string;
  testId: string;
}

interface CheckboxProps {
  checked: boolean;
}

export default class Checkbox extends Component<PassedProps, CheckboxProps> {
  constructor(props: PassedProps) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          ref={this.props.childRef}
          value={'I consent to my personal data'}
          className="checkbox-input"
          checked={this.state.checked}
          onChange={() => this.setState({ checked: !this.state.checked })}
          data-testid={this.props.testId}
        />
        <div
          className="checkbox-text"
          onClick={() => this.setState({ checked: !this.state.checked })}
        >
          {this.props.fieldTitle}
        </div>
      </div>
    );
  }
}
