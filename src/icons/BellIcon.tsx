import React from 'react';
import type { SVGAttributes } from 'react';

export default function BellIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return (
    <svg viewBox="0 0 158 158" width="1em" height="1em" {...props}>
      <path
        d="M109.375 66.3c0-23.946-8.906-43.992-31.25-49.296V0h-31.25v17.004c-22.422 5.304-31.25 25.272-31.25 49.296v42.9L0 117v15.6h125V117l-15.625-7.8V66.3c0-15.964 0-15.964 0 0zm-43.75 89.388c-1.016.234-2.031.312-3.125.312-8.672 0-15.625-7.02-15.703-15.6h31.25c0 2.184-.39 4.212-1.172 6.084a15.846 15.846 0 01-11.25 9.204c-.677.156-.677.156 0 0z"
        fill="currentColor"
      />
    </svg>
  );
}
