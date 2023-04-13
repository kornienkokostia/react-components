import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { SearchBar } from '../SearchBar';
import { Provider } from 'react-redux';
import store from '../../../store/store';

test('updates search input on user input', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const searchInput = screen.getByTestId('input');
  fireEvent.input(searchInput, { target: { value: 'test' } });
  expect(searchInput).toHaveValue('test');
});

test('triggers search on enter key press with search text', async () => {
  const mockDispatch = jest.fn();
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
  }));
  jest.mock('../../../services/themoviedb', () => ({
    useLazyGetSearchReasultsQuery: () => [jest.fn(), { data: { results: [] }, isFetching: false }],
  }));
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const searchInput = screen.getByTestId('input');
  fireEvent.change(searchInput, { target: { value: 'test' } });
  fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
});
