import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CloseIcon } from '..';

describe('Icon accessibility', () => {
  test('There should be no violations with an icon', async () => {
    const { container } = render(<CloseIcon />);
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });

  test('There should be no violations with an icon that is labelled', async () => {
    const { container } = render(<CloseIcon aria-label="Close me" />);
    const html = await axe(container);
    expect(html).toHaveNoViolations();
  });
});
