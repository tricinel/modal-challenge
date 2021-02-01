import React from 'react';
import type { SVGAttributes } from 'react';

export default function InfoIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return (
    <svg viewBox="0 0 158 158" width="1em" height="1em" {...props}>
      <path
        d="M79 0c43.63 0 79 35.37 79 79s-35.37 79-79 79S0 122.63 0 79 35.37 0 79 0zm7.174 59.83L62 64.573v5.894l8.826 1.666v48.692H62V128h33v-7.176h-8.826V59.831zM78.5 31c-2.984 0-5.287.833-6.907 2.499-1.546 1.59-2.355 3.588-2.425 5.996l-.005.346v.641c0 2.563.81 4.677 2.43 6.343 1.62 1.666 3.923 2.499 6.907 2.499s5.287-.833 6.907-2.499c1.546-1.59 2.355-3.589 2.425-5.996l.005-.347v-.64c0-2.563-.81-4.678-2.43-6.343C83.787 31.833 81.484 31 78.5 31z"
        fill="currentColor"
      />
    </svg>
  );
}
