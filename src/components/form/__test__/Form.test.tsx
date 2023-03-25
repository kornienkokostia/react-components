import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../Form';

describe('Form', () => {
  const addUserMock = jest.fn();
  const defaultProps = { addUser: addUserMock };
  const firstName = 'John';
  const lastName = 'Doe';
  const email = 'john.doe@example.com';
  const phone = '555-555-5555';
  const file = new File([''], 'test.txt', { type: 'text/plain' });
  const country = 'USA';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form', () => {
    const { getByText } = render(<Form {...defaultProps} />);
    expect(getByText('Create user:')).toBeInTheDocument();
  });

  it('validates user input and submits the form when all fields are valid', async () => {
    const { getByTestId } = render(<Form {...defaultProps} />);
    fireEvent.change(getByTestId('first-name'), { target: { value: firstName } });
    fireEvent.change(getByTestId('last-name'), { target: { value: lastName } });
    fireEvent.change(getByTestId('email'), { target: { value: email } });
    fireEvent.change(getByTestId('phone-number'), { target: { value: phone } });
    fireEvent.change(getByTestId('country'), { target: { value: country } });
    fireEvent.change(getByTestId('file'), { target: { files: [file] } });
    fireEvent.click(getByTestId('send-notif-one'));
    fireEvent.click(getByTestId('consent'));
    fireEvent.submit(getByTestId('create-btn'));
  });

  it('displays error messages when input is invalid', () => {
    const { getByTestId, getByText } = render(<Form {...defaultProps} />);
    fireEvent.change(getByTestId('first-name'), { target: { value: '' } });
    fireEvent.change(getByTestId('last-name'), { target: { value: '' } });
    fireEvent.change(getByTestId('email'), { target: { value: 'not_an_email' } });
    fireEvent.change(getByTestId('phone-number'), { target: { value: 'not_a_phone_number' } });
    fireEvent.change(getByTestId('file'), { target: { files: [] } });
    fireEvent.click(getByTestId('send-notif-one'));
    fireEvent.click(getByTestId('consent'));
    fireEvent.submit(getByTestId('create-btn'));

    expect(getByText('Please enter a valid first name.')).toBeInTheDocument();
    expect(getByText('Please enter a valid last name.')).toBeInTheDocument();
    expect(getByText('Please enter a valid email.')).toBeInTheDocument();
    expect(getByText('Please enter a valid phone number.')).toBeInTheDocument();
    expect(getByText('Please select a file.')).toBeInTheDocument();
    expect(addUserMock).not.toHaveBeenCalled();
  });
});
