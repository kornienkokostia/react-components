import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switcher from '../Switcher';

describe('Switcher', () => {
  test('should toggle the switcher state when clicked', () => {
    const childRefOne = React.createRef<HTMLInputElement>();
    const childRefTwo = React.createRef<HTMLInputElement>();
    const radioValOne = 'Option One';
    const radioValTwo = 'Option Two';
    const fieldTitle = 'Switcher Title';
    const testIdOne = 'switcher-input-1';
    const testIdTwo = 'switcher-input-2';

    const { getByTestId } = render(
      <Switcher
        childRefOne={childRefOne}
        childRefTwo={childRefTwo}
        radioValOne={radioValOne}
        radioValTwo={radioValTwo}
        fieldTitle={fieldTitle}
        testIdOne={testIdOne}
        testIdTwo={testIdTwo}
      />
    );

    const switcherToggler = getByTestId('switcher-toggler');

    // Check that the switcher starts off unchecked
    const radioInputOne = getByTestId(testIdOne) as HTMLInputElement;
    const radioInputTwo = getByTestId(testIdTwo) as HTMLInputElement;
    expect(radioInputOne.checked).toBe(true);
    expect(radioInputTwo.checked).toBe(false);

    // Click the switcher toggler
    fireEvent.click(switcherToggler);

    // Check that the switcher state has toggled
    expect(radioInputOne.checked).toBe(false);
    expect(radioInputTwo.checked).toBe(true);
  });
});
