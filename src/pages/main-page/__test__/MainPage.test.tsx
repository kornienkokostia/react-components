import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from '../MainPage';
import productDB from '../../../db/productDB';
import { setGoodsItemName } from '../../../components/product/Product';

describe('MainPage component', () => {
  test('renders the correct number of Product components', () => {
    const { getAllByTestId } = render(<MainPage />);
    expect(getAllByTestId('product')).toHaveLength(productDB.length);
  });

  // test('renders the correct products in the Product components', () => {
  //   const { getAllByTestId } = render(<MainPage />);
  //   const productElements = getAllByTestId('product');

  //   productElements.forEach((productElement, i) => {
  //     const product = productDB[i];
  //     expect(productElement).toHaveTextContent(setGoodsItemName(product));
      
      
  //   });
  // });
});