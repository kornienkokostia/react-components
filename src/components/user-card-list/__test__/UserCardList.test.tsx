import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { UserCardList } from '../UserCardList';
import store from '../../../store/store';

describe('UserCardList', () => {
  it('renders the list of user cards', () => {
    render(
      <Provider store={store}>
        <UserCardList />
      </Provider>
    );

    expect(screen.getByText('Users list')).toBeInTheDocument();
  });

  it('shows "No users were added" message when there are no users', () => {
    render(
      <Provider store={store}>
        <UserCardList />
      </Provider>
    );

    expect(screen.getByText('Users list')).toBeInTheDocument();
    expect(screen.queryByText('No users were added')).toBeInTheDocument();
  });
});
