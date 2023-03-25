import React, { Component, FormEvent } from 'react';
import TextInput from '../input-elems/TextInput';
import DateInput from '../input-elems/DateInput';
import Dropdown from '../input-elems/Dropdown';
import Switcher from '../input-elems/Switcher';
import Checkbox from '../input-elems/Checkbox';
import FileSelect from '../input-elems/FileSelect';
import countries from '../../db/countriesDB';
import './form.scss';
import User from '../../models/user';

interface PassedProps {
  addUser: (user: User) => void;
}

interface FormProps {
  firstNameValidation: boolean;
  lastNameValidation: boolean;
  emailValidation: boolean;
  phoneValidation: boolean;
  fileValidation: boolean;
}

export default class Form extends Component<PassedProps, FormProps> {
  constructor(props: PassedProps) {
    super(props);
    this.state = {
      firstNameValidation: true,
      lastNameValidation: true,
      emailValidation: true,
      phoneValidation: true,
      fileValidation: true,
    };
  }
  firstNameInput = React.createRef<HTMLInputElement>();
  lastNameInput = React.createRef<HTMLInputElement>();
  emailAddressInput = React.createRef<HTMLInputElement>();
  phoneNumberInput = React.createRef<HTMLInputElement>();
  birthdayDateInput = React.createRef<HTMLInputElement>();
  countrySelect = React.createRef<HTMLSelectElement>();
  consentDataCheckbox = React.createRef<HTMLInputElement>();
  sendNotifSwitcher = React.createRef<HTMLInputElement>();
  notSendNotifSwitcher = React.createRef<HTMLInputElement>();
  fileSelect = React.createRef<HTMLInputElement>();

  lengthValid = (str: string) => str.length !== 0;
  firstLetterValid = (str: string) => /^\p{Lu}/u.test(str);
  emailValid = (str: string) => {
    const emailValidation =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailValidation.test(str);
  };
  phoneValid = (str: string) => /^([0-9]{9,15})?$/.test(str);

  formValidation = () => {
    const firstNameVal = this.firstNameInput.current?.value as string;
    const lastNameVal = this.lastNameInput.current?.value as string;
    const emailVal = this.emailAddressInput.current?.value as string;
    const phoneVal = this.phoneNumberInput.current?.value as string;
    const fileVal = this.fileSelect.current?.value as string;

    this.lengthValid(firstNameVal) && this.firstLetterValid(firstNameVal)
      ? this.setState({ firstNameValidation: true })
      : this.setState({ firstNameValidation: false });

    this.lengthValid(lastNameVal) && this.firstLetterValid(lastNameVal)
      ? this.setState({ lastNameValidation: true })
      : this.setState({ lastNameValidation: false });

    this.emailValid(emailVal)
      ? this.setState({ emailValidation: true })
      : this.setState({ emailValidation: false });

    this.lengthValid(phoneVal) && this.phoneValid(phoneVal)
      ? this.setState({ phoneValidation: true })
      : this.setState({ phoneValidation: false });

    this.lengthValid(fileVal)
      ? this.setState({ fileValidation: true })
      : this.setState({ fileValidation: false });
  };

  removeFocus = (el: HTMLInputElement) => {
    el.focus();
    el.blur();
  };

  handleSubmit(e: FormEvent) {
    this.formValidation();
    e.preventDefault();
    setTimeout(() => {
      if (
        this.state.firstNameValidation &&
        this.state.lastNameValidation &&
        this.state.emailValidation &&
        this.state.phoneValidation &&
        this.state.fileValidation
      ) {
        this.setState({}, () => {
          setTimeout(() => {
            this.firstNameInput.current?.form?.reset();
            this.removeFocus(this.firstNameInput.current!);
            this.removeFocus(this.lastNameInput.current!);
            this.removeFocus(this.emailAddressInput.current!);
            this.removeFocus(this.phoneNumberInput.current!);
          });
          return this.props.addUser({
            firstName: this.firstNameInput.current?.value as string,
            lastName: this.lastNameInput.current?.value as string,
            email: this.emailAddressInput.current?.value as string,
            phoneNumber: this.phoneNumberInput.current?.value as string,
            birthday: this.birthdayDateInput.current?.value as string,
            country: this.countrySelect.current?.value as string,
            picFile: this.fileSelect.current?.files![0] as File,
            recieveNotif: this.notSendNotifSwitcher.current?.checked
              ? (this.sendNotifSwitcher.current?.value as string)
              : (this.notSendNotifSwitcher.current?.value as string),
            contestToData: this.consentDataCheckbox.current!.checked,
          });
        });
      }
    });
  }

  changeFirstNameValidation = () => {
    this.setState({ firstNameValidation: true });
  };
  changeLastNameValidation = () => {
    this.setState({ lastNameValidation: true });
  };
  changeEmailValidation = () => {
    this.setState({ emailValidation: true });
  };
  changePhoneValidation = () => {
    this.setState({ phoneValidation: true });
  };
  changeFileValidation = () => {
    this.setState({ fileValidation: true });
  };

  render() {
    return (
      <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
        <h1 className="form-title">Create user:</h1>
        <TextInput
          childRef={this.firstNameInput}
          fieldName="First Name"
          typeName="text"
          validation={this.state.firstNameValidation}
          changeValidation={this.changeFirstNameValidation}
          errorMsg="Please enter a valid first name."
          testId="first-name"
        />
        <TextInput
          childRef={this.lastNameInput}
          fieldName="Last Name"
          typeName="text"
          validation={this.state.lastNameValidation}
          changeValidation={this.changeLastNameValidation}
          errorMsg="Please enter a valid last name."
          testId="last-name"
        />
        <TextInput
          childRef={this.emailAddressInput}
          fieldName="Email Address"
          typeName="email"
          validation={this.state.emailValidation}
          changeValidation={this.changeEmailValidation}
          errorMsg="Please enter a valid email."
          testId="email"
        />
        <TextInput
          childRef={this.phoneNumberInput}
          fieldName="Phone Number"
          typeName="number"
          validation={this.state.phoneValidation}
          changeValidation={this.changePhoneValidation}
          errorMsg="Please enter a valid phone number."
          testId="phone-number"
        />

        <DateInput
          childRef={this.birthdayDateInput}
          fieldName="Day of the birth"
          testId="birthday"
        />

        <Dropdown
          childRef={this.countrySelect}
          fieldName="Country"
          options={countries}
          testId="country"
        />

        <FileSelect
          childRef={this.fileSelect}
          fieldName="Select file"
          validation={this.state.fileValidation}
          changeValidation={this.changeFileValidation}
          errorMsg="Please select a file."
          testId="file"
        ></FileSelect>

        <Switcher
          childRefOne={this.sendNotifSwitcher}
          childRefTwo={this.notSendNotifSwitcher}
          fieldTitle="Receive notifications about new products"
          radioValOne="I want to receive notifications about new products"
          radioValTwo="I don't want to receive notifications about new products"
          testIdOne="send-notif-one"
          testIdTwo="send-notif-two"
        />
        <Checkbox
          childRef={this.consentDataCheckbox}
          fieldTitle="I consent to my personal data"
          testId="consent"
        />

        <input type="submit" value="Create" data-testid="create-btn" className="form-submit-btn" />
      </form>
    );
  }
}
