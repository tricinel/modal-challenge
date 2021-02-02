import type { SVGAttributes } from 'react';

interface SvgAriaProps {
  'aria-hidden'?: boolean;
}

/*
 * If the SVG is not labelled properly using either `aria-label` or `aria-labelledby`,
 * we should make sure it's hidden from the accessibility tree.
 */
// eslint-disable-next-line import/prefer-default-export
export function applySvgAriaHidden(
  props: SVGAttributes<SVGElement>
): null | SvgAriaProps {
  const ariaProps = ['aria-label', 'aria-labelledby'];
  const svgProps = Object.keys(props) as (keyof SVGAttributes<SVGElement>)[];
  const isLabeled = svgProps.some((prop) => ariaProps.includes(prop));

  return isLabeled ? null : { 'aria-hidden': true };
}
