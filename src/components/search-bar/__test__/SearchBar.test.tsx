import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates input value on user input', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.input(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });
});
