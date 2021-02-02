import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Image from '..';

describe('Image defaults', () => {
  test('render an Image component with default values', () => {
    render(<Image src="/an/image" alt="great image" />);
    expect(screen.getByAltText('great image')).toBeInTheDocument();
  });
});

describe('Image accessibility', () => {
  test('There should be no violations with a default Image', async () => {
    const { container } = render(<Image src="/an/image" alt="great image" />);
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be violations with an Image without the alt prop', async () => {
    // @ts-expect-error missing alt
    const { container } = render(<Image src="/an/image" />);
    const html = await axe(container);
    expect(html).not.toHaveNoViolations();
  });

  test('There should be no violations with an Image with an empty alt prop', async () => {
    const { container } = render(<Image src="/an/image" alt="" />);
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });
});
