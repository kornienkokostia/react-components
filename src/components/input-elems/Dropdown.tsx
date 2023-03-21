import React, { Component, RefObject } from 'react';

interface PassedProps {
  childRef: RefObject<HTMLSelectElement>;
  fieldName: string;
  options: string[];
}

export default class Dropdown extends Component<PassedProps> {
  constructor(props: PassedProps) {
    super(props);
  }

  render() {
    return (
      <div className="input-field dropdown-input">
        <select name="pets" className="input-field-input" ref={this.props.childRef}>
          {this.props.options.map((el, i) => (
            <option value={el} key={i}>
              {el}
            </option>
          ))}
        </select>
        <span className={`input-field-title active`}>{this.props.fieldName}</span>
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          className="dropdown-input-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.99 0C10.57 0 10.19 0.16 9.87 0.47L0.42 9.67C0.15 9.93 0 10.25 0 10.62C0 11.39 0.63 12 1.43 12C1.82 12 2.19 11.85 2.47 11.59L11.6 2.7H10.38L19.52 11.59C19.79 11.85 20.16 12 20.56 12C21.37 12 21.99 11.39 21.99 10.62C21.99 10.25 21.84 9.93 21.57 9.66L12.12 0.47C11.79 0.15 11.42 0 10.99 0Z"
            fill="#86868B"
          />
        </svg>
      </div>
    );
  }
}
