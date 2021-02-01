import React from 'react';
import type { SVGAttributes } from 'react';

export default function EmbedIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return (
    <svg viewBox="0 0 154 93" width="1em" height="1em" {...props}>
      <path
        d="M154 46.5L107.72 0 96.83 10.941 132.221 46.5l-35.39 35.559L107.72 93 154 46.5zm-154 0L46.28 93l10.89-10.941L21.779 46.5l35.39-35.559L46.28 0 0 46.5z"
        fill="currentColor"
      />
    </svg>
  );
}
