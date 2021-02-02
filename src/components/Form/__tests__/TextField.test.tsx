import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { TextField } from '..';

describe('TextField defaults', () => {
  test('render a TextField component with default values', () => {
    render(<TextField label="Enter your name" value="" />);
    expect(screen.getByLabelText('Enter your name')).toBeInTheDocument();
  });

  test('render a TextField component with a value', () => {
    render(<TextField label="Enter your name" value="Bogdan" />);
    expect(screen.getByDisplayValue('Bogdan')).toBeInTheDocument();
  });

  test('render a TextField component with a hint text', () => {
    render(<TextField label="Enter your name" value="" hint="Just do it" />);
    expect(screen.getByText('Just do it')).toBeInTheDocument();
  });
});

describe('TextField states', () => {
  test('render a disabled TextField component', () => {
    render(
      <TextField label="Enter your name" value="Bogdan" isDisabled={true} />
    );
    expect(screen.getByLabelText('Enter your name')).toBeDisabled();
  });

  test('render a required TextField component', () => {
    render(
      <TextField label="Enter your name" value="Bogdan" isRequired={true} />
    );
    expect(screen.getByLabelText('Enter your name')).toBeRequired();
  });

  test('render a readonly TextField component', () => {
    render(
      <TextField label="Enter your name" value="Bogdan" isReadonly={true} />
    );
    expect(screen.getByLabelText('Enter your name')).toHaveAttribute(
      'readonly'
    );
  });

  test('render a TextField component and immediately focus on it', () => {
    render(
      <TextField label="Enter your name" value="Bogdan" autoFocus={true} />
    );
    expect(screen.getByLabelText('Enter your name')).toHaveFocus();
  });

  test('render an invalid TextField component', () => {
    render(
      <TextField label="Enter your name" value="Bogdan" isValid={false} />
    );
    expect(screen.getByLabelText('Enter your name')).toBeInvalid();
  });
});

describe('TextField events', () => {
  test('allow the user to enter text in a TextField component', () => {
    render(<TextField label="Enter your name" value="" />);
    const domEl = screen.getByLabelText('Enter your name');
    fireEvent.change(domEl, { target: { value: 'Bogdan' } });
    expect(domEl).toHaveValue('Bogdan');
    fireEvent.change(domEl, { target: { value: '' } });
    expect(domEl).toHaveValue('');
  });
});

describe('TextField accessibility', () => {
  test('There should be no violations with a default TextField', async () => {
    const { container } = render(
      <TextField label="Enter your name" value="" />
    );
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be violations with a TextField without a label', async () => {
    // @ts-expect-error missing label
    const { container } = render(<TextField value="" />);
    const html = await axe(container);
    expect(html).not.toHaveNoViolations();
  });
});
