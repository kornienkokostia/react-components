import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from '../MainPage';
import productDB from '../../../db/productDB';

describe('MainPage component', () => {
  test('renders the correct number of Product components', () => {
    const { getAllByTestId } = render(<MainPage />);
    expect(getAllByTestId('product')).toHaveLength(productDB.length);
  });
});
