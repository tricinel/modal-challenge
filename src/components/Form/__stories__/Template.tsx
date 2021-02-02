import React from 'react';
import { TextField, TextArea } from '..';
import type { TextFieldProps, TextAreaProps } from '../types';

/*
 * This is currently a bug in storybook.
 * When you create the Template in the same place as the MDX stories,
 * the Show code action will give you a <MDXCreateElement> instead of the actual element.
 * See: https://github.com/storybookjs/storybook/issues/11542
 */
export function TextFieldTemplate(args: TextFieldProps): JSX.Element {
  const [value, setValue] = React.useState(args.value);

  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function TextAreaTemplate(args: TextAreaProps): JSX.Element {
  const [value, setValue] = React.useState(args.value);

  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
