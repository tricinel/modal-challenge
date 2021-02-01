import React from 'react';
import type { SVGAttributes } from 'react';

export default function CloseIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return (
    <svg viewBox="0 0 158 158" width="1em" height="1em" {...props}>
      <path
        d="M134.893 0L75 59.893 15.107 0 0 15.107 59.893 75 0 134.893 15.107 150 75 90.107 134.893 150 150 134.893 90.107 75 150 15.107 134.893 0z"
        fill="currentColor"
      />
    </svg>
  );
}
