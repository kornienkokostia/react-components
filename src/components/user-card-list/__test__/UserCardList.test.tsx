import React from 'react';
import { render, screen } from '@testing-library/react';
import User from '../../../models/user';
import UserCardList from '../UserCardList';

describe('UserCardList', () => {
  const users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      birthday: '01/01/1990',
      country: 'USA',
      recieveNotif: 'Yes',
      contestToData: true,
    },
    // Add more users as needed
  ];

  it('renders a list of user cards', () => {
    render(<UserCardList users={users} />);
    const userCards = screen.getAllByRole('listitem');

    expect(userCards.length).toBe(users.length);
    users.forEach((user, i) => {
      expect(userCards[i]).toHaveTextContent(`${user.firstName} ${user.lastName}`);
      expect(userCards[i]).toHaveTextContent(user.email);
      expect(userCards[i]).toHaveTextContent(user.phoneNumber);
      expect(userCards[i]).toHaveTextContent(user.country);
      expect(userCards[i]).toHaveTextContent(user.birthday);
      expect(userCards[i]).toHaveTextContent(user.recieveNotif ? 'Yes' : 'No');
      expect(userCards[i]).toHaveTextContent(user.contestToData ? 'Yes' : 'No');
    });
  });

  it('displays a message if no users were added', () => {
    render(<UserCardList users={[]} />);
    const noUsersMessage = screen.getByText('No users were added');

    expect(noUsersMessage).toBeInTheDocument();
  });
});
