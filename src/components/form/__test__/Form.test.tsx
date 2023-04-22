import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../Form';
import store from '../../../store/store';
import { Provider } from 'react-redux';

describe('Form', () => {
  test('should call addUser function with correct parameters on form submission', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const firstNameInput = screen.getByTestId('first-name');
    const lastNameInput = screen.getByTestId('last-name');
    const emailInput = screen.getByTestId('email');
    const phoneInput = screen.getByTestId('phone-number');
    const birthdayInput = screen.getByTestId('birthday');
    const countryInput = screen.getByTestId('country');
    const fileInput = screen.getByTestId('file');
    const sendNotifSwitcher = screen.getByTestId('send-notif');
    const contestToDataCheckbox = screen.getByTestId('contest-to-data');
    const contestToDataCheckboxText = screen.getByTestId('checkbox-text');
    const submitButton = screen.getByTestId('create-btn');

    fireEvent.input(firstNameInput, 'John');
    fireEvent.input(lastNameInput, 'Doe');
    fireEvent.input(emailInput, 'john.doe@example.com');
    fireEvent.input(phoneInput, '123456789');
    fireEvent.change(birthdayInput, { target: { value: '1990-01-01' } });
    fireEvent.change(countryInput, { target: { value: 'United States' } });
    const file = new File(['file contents'], 'test.png', { type: 'image/png' });
    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.click(sendNotifSwitcher);
    fireEvent.click(contestToDataCheckbox);
    fireEvent.click(contestToDataCheckboxText);
    fireEvent.click(submitButton);
  });
});
