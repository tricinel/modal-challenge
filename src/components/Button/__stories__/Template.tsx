import React from 'react';
import Button from '..';
import CheckIcon from '../../../icons/CheckIcon';
import type { ButtonProps } from '..';

/*
 * This is currently a bug in storybook.
 * When you create the Template in the same place as the MDX stories,
 * the Show code action will give you a <MDXCreateElement> instead of the actual element.
 * See: https://github.com/storybookjs/storybook/issues/11542
 */
export function Template(args: ButtonProps): JSX.Element {
  return <Button {...args}>Press me</Button>;
}

export function TemplateWithIcon(args: ButtonProps): JSX.Element {
  return (
    <Button {...args}>
      <CheckIcon width="2em" />
    </Button>
  );
}

export function TemplateWithLongText(args: ButtonProps): JSX.Element {
  return <Button {...args}>Read the next article on the BBC</Button>;
}

export function TemplateWithTextOverflow(args: ButtonProps): JSX.Element {
  return (
    <div style={{ width: '8em' }}>
      <Button {...args}>Read the next article on the BBC</Button>
    </div>
  );
}
