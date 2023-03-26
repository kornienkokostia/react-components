import React, { RefObject } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '../TextInput';

interface Props {
  childRef: RefObject<HTMLInputElement>;
  fieldName: string;
  typeName: 'text' | 'email' | 'number';
  validation: boolean;
  changeValidation: () => void;
  errorMsg: string;
  testId: string;
}

describe('TextInput', () => {
  const mockChangeValidation = jest.fn();
  const props: Props = {
    childRef: { current: null },
    fieldName: 'Name',
    typeName: 'text',
    validation: true,
    changeValidation: mockChangeValidation,
    errorMsg: 'Invalid input',
    testId: 'test-input',
  };

  it('renders input field with title', () => {
    render(<TextInput {...props} />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByTestId(/test-input/i)).toBeInTheDocument();
  });

  it('calls changeValidation on input change', () => {
    render(<TextInput {...props} />);
    const input = screen.getByTestId(/test-input/i);
    fireEvent.change(input, { target: { value: 'test' } });
  });

  it('displays error message when validation fails', () => {
    render(<TextInput {...props} validation={false} />);
    expect(screen.getByText(/invalid input/i)).toBeInTheDocument();
  });
});
