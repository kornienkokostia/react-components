import React from 'react';
import { render } from '@testing-library/react';
import { UserCard } from '../UserCard';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phoneNumber: '+1 (555) 123-4567',
  birthday: '1990-01-01',
  country: 'USA',
  picFile: 'https://example.com/profile-pic.png',
  recieveNotif: 'I want to receive notifications about new products',
  contestToData: 'I consent to my personal data',
};

describe('UserCard', () => {
  it('renders user card with correct information', () => {
    const { getByText } = render(<UserCard {...user} />);

    // Check for the user's name and email in the header
    expect(getByText(`${user.firstName} ${user.lastName}`)).toBeInTheDocument();
    expect(getByText(user.email)).toBeInTheDocument();

    // Check for the user's information in the card info section
    expect(getByText(`${user.phoneNumber}`)).toBeInTheDocument();
    expect(getByText(`01/01/1990`)).toBeInTheDocument();
    expect(getByText(`${user.country}`)).toBeInTheDocument();
    expect(getByText(user.recieveNotif)).toBeInTheDocument();
    expect(getByText(user.contestToData)).toBeInTheDocument();
  });
});
