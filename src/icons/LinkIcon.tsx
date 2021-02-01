import React from 'react';
import type { SVGAttributes } from 'react';

export default function LinkIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return (
    <svg viewBox="0 0 120 120" width="1em" height="1em" {...props}>
      <path
        d="M94.648 74.85L109.498 60c13.668-13.668 13.668-35.83 0-49.497-13.669-13.669-35.83-13.669-49.498 0L45.15 25.352l9.9 9.9 14.85-14.85c8.2-8.201 21.497-8.201 29.698 0s8.201 21.497 0 29.699L84.748 64.95l9.9 9.9zm-69.296-29.7L10.502 60c-13.668 13.668-13.668 35.83 0 49.497 13.669 13.669 35.83 13.669 49.498 0l14.85-14.849-9.9-9.9-14.85 14.85c-8.2 8.201-21.497 8.201-29.698 0s-8.201-21.497 0-29.699l14.85-14.849-9.9-9.9zm54.447-14.848l9.9 9.899L40.2 89.698l-9.9-9.899L79.8 30.302z"
        fill="currentColor"
      />
    </svg>
  );
}
