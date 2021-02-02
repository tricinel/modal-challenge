import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { TextArea } from '..';

describe('TextArea defaults', () => {
  test('render a TextArea component with default values', () => {
    render(<TextArea label="Enter your message" value="" />);
    expect(screen.getByLabelText('Enter your message')).toBeInTheDocument();
  });

  test('render a TextArea component with a value', () => {
    render(
      <TextArea label="Enter your message" value="I'm a pretty butterfly" />
    );
    expect(
      screen.getByDisplayValue("I'm a pretty butterfly")
    ).toBeInTheDocument();
  });

  test('render a TextArea component with a hint text', () => {
    render(<TextArea label="Enter your message" value="" hint="Just do it" />);
    expect(screen.getByText('Just do it')).toBeInTheDocument();
  });

  test('render a TextArea component with a certain number of rows', () => {
    render(<TextArea label="Enter your message" value="" rows={10} />);
    expect(screen.getByLabelText('Enter your message')).toHaveAttribute(
      'rows',
      '10'
    );
  });
});

describe('TextArea states', () => {
  test('render a disabled TextArea component', () => {
    render(
      <TextArea
        label="Enter your message"
        value="I'm a pretty butterfly"
        isDisabled={true}
      />
    );
    expect(screen.getByLabelText('Enter your message')).toBeDisabled();
  });

  test('render a required TextArea component', () => {
    render(
      <TextArea
        label="Enter your message"
        value="I'm a pretty butterfly"
        isRequired={true}
      />
    );
    expect(screen.getByLabelText('Enter your message')).toBeRequired();
  });

  test('render a readonly TextArea component', () => {
    render(
      <TextArea
        label="Enter your message"
        value="I'm a pretty butterfly"
        isReadonly={true}
      />
    );
    expect(screen.getByLabelText('Enter your message')).toHaveAttribute(
      'readonly'
    );
  });

  test('render a TextArea component and immediately focus on it', () => {
    render(
      <TextArea
        label="Enter your message"
        value="I'm a pretty butterfly"
        autoFocus={true}
      />
    );
    expect(screen.getByLabelText('Enter your message')).toHaveFocus();
  });

  test('render an invalid TextArea component', () => {
    render(
      <TextArea
        label="Enter your message"
        value="I'm a pretty butterfly"
        isValid={false}
      />
    );
    expect(screen.getByLabelText('Enter your message')).toBeInvalid();
  });
});

describe('TextArea events', () => {
  test('allow the user to enter text in a TextArea component', () => {
    render(<TextArea label="Enter your message" value="" />);
    const domEl = screen.getByLabelText('Enter your message');
    fireEvent.change(domEl, {
      target: { value: "I'm a pretty butterfly" }
    });
    expect(domEl).toHaveValue("I'm a pretty butterfly");
    fireEvent.change(domEl, { target: { value: '' } });
    expect(domEl).toHaveValue('');
  });
});

describe('TextArea accessibility', () => {
  test('There should be no violations with a default TextArea', async () => {
    const { container } = render(
      <TextArea label="Enter your message" value="" />
    );
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be violations with a TextArea without a label', async () => {
    // @ts-expect-error missing label
    const { container } = render(<TextArea value="" />);
    const html = await axe(container);
    expect(html).not.toHaveNoViolations();
  });
});
