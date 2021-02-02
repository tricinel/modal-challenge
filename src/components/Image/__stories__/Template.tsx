import React from 'react';
import Image from '..';
import type { ImageProps } from '..';

/*
 * This is currently a bug in storybook.
 * When you create the Template in the same place as the MDX stories,
 * the Show code action will give you a <MDXCreateElement> instead of the actual element.
 * See: https://github.com/storybookjs/storybook/issues/11542
 */
export default function Template(args: ImageProps): JSX.Element {
  return <Image {...args} />;
}
