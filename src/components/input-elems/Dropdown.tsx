import React, { Component, RefObject } from 'react';
import dropdownArrow from '../../assets/dropdown-arrow.svg';
import './input.scss';

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
        <img src={dropdownArrow} alt="dropdown-arrow" className="dropdown-input-icon" />
      </div>
    );
  }
}
