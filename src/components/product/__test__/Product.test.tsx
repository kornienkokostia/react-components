import React from 'react';
import { render } from '@testing-library/react';

import Product from './../Product';
import IProduct from '../../../models/products';

describe('Product', () => {
  const product: IProduct = {
    id: '1',
    brand: 'Apple',
    name: 'iPhone 12',
    category: 'phones',
    color: 'red',
    model: 'A2404',
    storage: '64GB',
    displaySize: '6.1',
    stock: 10,
    price: '999',
    imgs: ['https://example.com/image.jpg'],
  } as IProduct;

  test('renders product name', () => {
    const { getByText } = render(<Product product={product} />);
    const nameElement = getByText(/Apple iPhone 12/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders product stock', () => {
    const { getByText } = render(<Product product={product} />);
    const stockElement = getByText(/Stock: 10/i);
    expect(stockElement).toBeInTheDocument();
  });

  test('renders product image', () => {
    const { getByAltText } = render(<Product product={product} />);
    const imageElement = getByAltText(/product/i);
    expect(imageElement).toBeInTheDocument();
  });
});
