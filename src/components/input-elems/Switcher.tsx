import React, { Component, RefObject } from 'react';
import './switcher.scss';

interface PassedProps {
  childRefOne: RefObject<HTMLInputElement>;
  childRefTwo: RefObject<HTMLInputElement>;
  radioValOne: string;
  radioValTwo: string;
  fieldTitle: string;
  testIdOne: string;
  testIdTwo: string;
}

interface SwitcherProps {
  checkedVal: boolean;
}

export default class Switcher extends Component<PassedProps, SwitcherProps> {
  constructor(props: PassedProps) {
    super(props);
    this.state = {
      checkedVal: false,
    };
  }

  render() {
    return (
      <div className="switcher">
        <div className="switcher-content">
          <label
            className="switcher-toggler"
            onClick={() => this.setState({ checkedVal: !this.state.checkedVal })}
            data-testid="switcher-toggler"
          >
            <div className={`bg-checkbox ${this.state.checkedVal ? 'active' : ''}`}></div>
            <i></i>
          </label>
          <input
            type="radio"
            className="switcher-input"
            ref={this.props.childRefOne}
            value={this.props.radioValOne}
            checked={!this.state.checkedVal}
            onChange={() => {}}
            data-testid={this.props.testIdOne}
          />
          <input
            type="radio"
            className="switcher-input"
            ref={this.props.childRefTwo}
            value={this.props.radioValTwo}
            checked={this.state.checkedVal}
            onChange={() => {}}
            data-testid={this.props.testIdTwo}
          />
          <p className="switcher-title">{this.props.fieldTitle}</p>
        </div>
      </div>
    );
  }
}
