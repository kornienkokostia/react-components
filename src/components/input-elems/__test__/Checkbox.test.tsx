import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe('Checkbox component', () => {
  it('renders checkbox with field title and default unchecked state', () => {
    const testId = 'checkbox-test-id';
    const fieldTitle = 'I consent to my personal data';
    const { getByTestId } = render(
      <Checkbox childRef={React.createRef()} fieldTitle={fieldTitle} testId={testId} />
    );
    const checkboxElement = getByTestId(testId);
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
    expect(checkboxElement.nextSibling!.textContent).toBe(fieldTitle);
  });

  it('changes checkbox state when clicked on label or checkbox', () => {
    const testId = 'checkbox-test-id';
    const fieldTitle = 'I consent to my personal data';
    const { getByTestId } = render(
      <Checkbox childRef={React.createRef()} fieldTitle={fieldTitle} testId={testId} />
    );
    const checkboxElement = getByTestId(testId);
    const labelElement = checkboxElement.nextSibling!;
    expect(checkboxElement).not.toBeChecked();
    fireEvent.click(labelElement);
    expect(checkboxElement).toBeChecked();
    fireEvent.click(labelElement);
    expect(checkboxElement).not.toBeChecked();
    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    fireEvent.click(checkboxElement);
    expect(checkboxElement).not.toBeChecked();
  });
});
