import React, { useState } from 'react';
import { TextInput } from '../input-elems/TextInput';
import { DateInput } from '../input-elems/DateInput';
import { Dropdown } from '../input-elems/Dropdown';
import { Switcher } from '../input-elems/Switcher';
import { Checkbox } from '../input-elems/Checkbox';
import { FileSelect } from '../input-elems/FileSelect';
import countries from '../../db/countriesDB';
import './form.scss';
import User from '../../models/user';
import { useForm } from 'react-hook-form';
import { FormData } from '../../models/form';

interface PassedProps {
  addUser: (user: User) => void;
}

export const Form = (props: PassedProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [firstNameFocused, setFirstNameFocused] = useState<boolean>(false);
  const [lastNameFocused, setLastNameFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [phoneFocused, setPhoneFocused] = useState<boolean>(false);
  const [checkedSendNotif, setCheckedSendNotif] = useState<boolean>(false);
  const [checkedContestToData, setCheckedContestToData] = useState<boolean>(false);

  const onSubmit = (data: object) => {
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      birthday,
      country,
      file,
      sendNotif,
      contestToData,
    } = data as FormData;
    props.addUser({
      firstName: firstName,
      lastName: lastName,
      email: emailAddress,
      phoneNumber: phoneNumber,
      birthday: birthday,
      country: country,
      picFile: URL.createObjectURL(file[0]),
      recieveNotif: sendNotif,
      contestToData: contestToData,
    });
    reset();
    setFirstNameFocused(false);
    setLastNameFocused(false);
    setEmailFocused(false);
    setPhoneFocused(false);
    setCheckedSendNotif(false);
    setCheckedContestToData(false);
  };

  return (
    <form className="form" data-testid={'form'} onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-title">Create user:</h1>
      <TextInput
        name="firstName"
        fieldTitle="First Name"
        typeName="text"
        register={register}
        errors={errors}
        requestedErrorMsg="Please enter a first name."
        patternErrorMsg="Please enter a valid first name."
        filedValid={/^[A-ZА-Я]{1}[A-Za-zА-Яа-я\'\']*$/}
        inputFocused={firstNameFocused}
        setInputFocused={setFirstNameFocused}
        testId="first-name"
      />
      <TextInput
        name="lastName"
        fieldTitle="Last Name"
        typeName="text"
        register={register}
        errors={errors}
        requestedErrorMsg="Please enter a last name."
        patternErrorMsg="Please enter a valid last name."
        filedValid={/^[A-ZА-Я]{1}[A-Za-zА-Яа-я\'\']*$/}
        inputFocused={lastNameFocused}
        setInputFocused={setLastNameFocused}
        testId="last-name"
      />
      <TextInput
        name="emailAddress"
        fieldTitle="Email Address"
        typeName="email"
        register={register}
        errors={errors}
        requestedErrorMsg="Please enter an email."
        patternErrorMsg="Please enter a valid email."
        filedValid={
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        }
        inputFocused={emailFocused}
        setInputFocused={setEmailFocused}
        testId="email"
      />
      <TextInput
        name="phoneNumber"
        fieldTitle="Phone Number"
        typeName="number"
        register={register}
        errors={errors}
        requestedErrorMsg="Please enter a phone number."
        patternErrorMsg="Please enter a valid phone number."
        filedValid={/^([0-9]{9,15})?$/}
        inputFocused={phoneFocused}
        setInputFocused={setPhoneFocused}
        testId="phone-number"
      />
      <DateInput
        name="birthday"
        register={register}
        fieldTitle="Day of the birth"
        testId="birthday"
        errors={errors}
        requestedErrorMsg="Please select a date of the birth."
      />
      <Dropdown
        name="country"
        register={register}
        fieldTitle="Country"
        options={countries}
        testId="country"
      />
      <FileSelect
        fieldTitle="Select file"
        name="file"
        register={register}
        errors={errors}
        requestedErrorMsg="Please select a file."
        testId="file"
      ></FileSelect>
      <Switcher
        name="sendNotif"
        fieldTitle="Receive notifications about new products"
        radioValOne="I don't want to receive notifications about new products"
        radioValTwo="I want to receive notifications about new products"
        register={register}
        checkedVal={checkedSendNotif}
        setCheckedVal={setCheckedSendNotif}
        testIdOne="send-notif-one"
        testIdTwo="send-notif-two"
      />
      <Checkbox
        register={register}
        name="contestToData"
        fieldTitle="I consent to my personal data"
        checked={checkedContestToData}
        setChecked={setCheckedContestToData}
        errors={errors}
        requestedErrorMsg="Please agree to our terms."
        testId="contest-to-data"
      />
      <input type="submit" value="Create" data-testid="create-btn" className="form-submit-btn" />
    </form>
  );
};
