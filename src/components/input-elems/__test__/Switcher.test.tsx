import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Switcher } from '../Switcher';

describe('Switcher component', () => {
  const props = {
    name: 'sendNotification',
    fieldTitle: 'Send notification',
    radioValOne: 'false',
    radioValTwo: 'true',
    testIdOne: 'switcher-radio-one',
    testIdTwo: 'switcher-radio-two',
    register: jest.fn(),
    checkedVal: false,
    setCheckedVal: jest.fn(),
  };

  it('renders without crashing', () => {
    const { getByTestId } = render(<Switcher {...props} />);
    expect(getByTestId('send-notif')).toBeInTheDocument();
  });

  it('updates checkedVal when radio button is clicked', () => {
    const { getByTestId } = render(<Switcher {...props} />);
    const radioOne = getByTestId(props.testIdOne);
    const radioTwo = getByTestId(props.testIdTwo);

    fireEvent.click(radioTwo);

    fireEvent.click(radioOne);
  });
});
