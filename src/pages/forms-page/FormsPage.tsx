import DateInput from '../../components/input-elems/DateInput';
import Dropdown from '../../components/input-elems/Dropdown';
import TextInput from '../../components/input-elems/TextInput';
import countries from '../../db/countriesDB';
import './formsPage.scss';

import React, { Component, FormEvent } from 'react';

export default class FormsPage extends Component<object> {
  firstNameInput = React.createRef<HTMLInputElement>();
  lastNameInput = React.createRef<HTMLInputElement>();
  emailAddressInput = React.createRef<HTMLInputElement>();
  phoneNumberInput = React.createRef<HTMLInputElement>();
  deliveryDateInput = React.createRef<HTMLInputElement>();
  countrySelect = React.createRef<HTMLSelectElement>();

  handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div className="top-white-bg"></div>

        <div className="form-wrapper">
          <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
            <TextInput childRef={this.firstNameInput} fieldName="First Name" />
            <TextInput childRef={this.lastNameInput} fieldName="Last Name" />
            <TextInput childRef={this.emailAddressInput} fieldName="Email Address" />
            <TextInput childRef={this.phoneNumberInput} fieldName="Phone Number" />

            <DateInput childRef={this.deliveryDateInput} fieldName="Delivery Date" />

            <Dropdown childRef={this.countrySelect} fieldName="Country" options={countries} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
