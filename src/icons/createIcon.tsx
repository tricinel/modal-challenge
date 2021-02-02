import React from 'react';
import type { SVGAttributes } from 'react';
import { applySvgAriaHidden } from '../core/a11y';

interface SvgIconProps {
  path: string;
  fill?: string;
  w?: string;
  h?: string;
  viewBox?: string;
  props: SVGAttributes<SVGElement>;
}

export default function createIcon({
  path,
  fill = 'currentColor',
  w = '1em',
  h = '1em',
  viewBox,
  props
}: SvgIconProps): JSX.Element {
  return (
    <svg
      viewBox={viewBox}
      width={w}
      height={h}
      role="img"
      {...props}
      {...applySvgAriaHidden(props)}
    >
      <path d={path} fill={fill} />
    </svg>
  );
}
