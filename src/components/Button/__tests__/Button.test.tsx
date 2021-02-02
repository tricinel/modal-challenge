import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Button from '..';

describe('Button visual styles', () => {
  test('render a Button component with default values', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('render a Button component with a custom action', () => {
    render(<Button action="destructive">Delete</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('render a Button component with a custom appearance', () => {
    render(<Button appearance="ghost">Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('render a Button component with a custom size', () => {
    render(<Button size="lg">Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

describe('Button states', () => {
  test('render a disabled Button component', () => {
    render(<Button disabled={true}>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('render a focused Button component', () => {
    render(<Button autoFocus={true}>Click me</Button>);
    expect(screen.getByRole('button')).toHaveFocus();
  });
});

describe('Button events', () => {
  test('react to a click on a Button component', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(3);
  });

  test('do not react to a click on a disabled Button component', () => {
    const onClick = jest.fn();
    render(
      <Button disabled={true} onClick={onClick}>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('react to a keypress event on a Button component', () => {
    const onKeyUp = jest.fn();
    render(<Button onKeyUp={onKeyUp}>Click me</Button>);
    fireEvent.keyUp(screen.getByRole('button'), {
      key: 'Enter',
      code: 'Enter'
    });
    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });
});

describe('Button accessibility', () => {
  test('There should be no violations with a text button', async () => {
    const { container } = render(<Button>Click me</Button>);
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be no violations with a text and icon button', async () => {
    const { container } = render(
      <Button>
        <svg>
          <circle cx="1" cy="1" r="1" />
        </svg>
        Click me
      </Button>
    );
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be no violations with an icon button when it is labeled', async () => {
    const { container } = render(
      <Button aria-label="Click me">
        <svg>
          <circle cx="1" cy="1" r="1" />
        </svg>
      </Button>
    );
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be violations with an icon button when it is not labeled', async () => {
    const { container } = render(
      <Button>
        <svg>
          <circle cx="1" cy="1" r="1" />
        </svg>
      </Button>
    );
    const html = await axe(container);
    expect(html).not.toHaveNoViolations();
  });
});
