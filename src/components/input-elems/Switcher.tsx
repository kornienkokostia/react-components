import React, { Component, RefObject, useState } from 'react';
import './switcher.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form/dist/types';

// interface SwitcherProps {
//   checkedVal: boolean;
// }

// export default class Switcher extends Component<PassedProps, SwitcherProps> {
//   constructor(props: PassedProps) {
//     super(props);
//     this.state = {
//       checkedVal: false,
//     };
//   }

//   render() {
//     return (
//       <div className="switcher">
//         <div className="switcher-content">
//           <label
//             className="switcher-toggler"
//             onClick={() => this.setState({ checkedVal: !this.state.checkedVal })}
//             data-testid="switcher-toggler"
//           >
//             <div className={`bg-checkbox ${this.state.checkedVal ? 'active' : ''}`}></div>
//             <i></i>
//           </label>
//           <input
//             type="radio"
//             className="switcher-input"
//             ref={this.props.childRefOne}
//             value={this.props.radioValOne}
//             checked={!this.state.checkedVal}
//             onChange={() => {}}
//             data-testid={this.props.testIdOne}
//           />
//           <input
//             type="radio"
//             className="switcher-input"
//             ref={this.props.childRefTwo}
//             value={this.props.radioValTwo}
//             checked={this.state.checkedVal}
//             onChange={() => {}}
//             data-testid={this.props.testIdTwo}
//           />
//           <p className="switcher-title">{this.props.fieldTitle}</p>
//         </div>
//       </div>
//     );
//   }
// }

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

        <p className="switcher-title">{props.fieldTitle}</p>
      </div>
    </div>
  );
};
