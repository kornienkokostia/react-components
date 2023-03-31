import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form } from '../Form';

describe('Form component', () => {
  it('submits form with user data', () => {
    const addUserMock = jest.fn();
    const { getByTestId } = render(<Form addUser={addUserMock} />);
    const firstNameInput = getByTestId('first-name');
    const lastNameInput = getByTestId('last-name');
    const emailInput = getByTestId('email');
    const phoneInput = getByTestId('phone-number');
    const birthdayInput = getByTestId('birthday');
    const countryInput = getByTestId('country');
    const fileInput = getByTestId('file');
    const sendNotifRadio = getByTestId('send-notif-two');
    const contestToDataCheckbox = getByTestId('contest-to-data');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(birthdayInput, { target: { value: '2022-01-01' } });
    fireEvent.change(countryInput, { target: { value: 'Canada' } });
    fireEvent.change(fileInput, {
      target: { files: [new File([''], 'test.jpg', { type: 'image/jpeg' })] },
    });
    fireEvent.click(sendNotifRadio);
    fireEvent.click(contestToDataCheckbox);

    fireEvent.submit(getByTestId('form'));

    // expect(addUserMock).toHaveBeenCalledWith({
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'johndoe@example.com',
    //   phoneNumber: '1234567890',
    //   birthday: '2022-01-01',
    //   country: 'Canada',
    //   picFile: expect.any(String),
    //   recieveNotif: true,
    //   contestToData: true,
    // });
  });
});
