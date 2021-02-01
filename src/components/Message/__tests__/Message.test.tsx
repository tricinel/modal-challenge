import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Message from '..';

describe('Message', () => {
  test('render a Message component with default values', () => {
    render(<Message>This is my message</Message>);
    expect(screen.getByText('This is my message')).toBeInTheDocument();
  });

  test('render a Message component with a custom status', () => {
    const { container } = render(
      <Message status="confirmation">This is my information message</Message>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('render a Message component without an icon', () => {
    const { container } = render(
      <Message hideIcon={true}>This is without an icon</Message>
    );
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });
});

describe('Message Accessibility', () => {
  test('There should be no violations', async () => {
    const { container } = render(<Message>Some message</Message>);
    const html = await axe(container);

    expect(html).toHaveNoViolations();
  });
});
