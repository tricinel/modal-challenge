import type { SVGAttributes } from 'react';
import createIcon from './createIcon';

export default function CloseIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return createIcon({
    path:
      'M134.893 0L75 59.893 15.107 0 0 15.107 59.893 75 0 134.893 15.107 150 75 90.107 134.893 150 150 134.893 90.107 75 150 15.107 134.893 0z',
    viewBox: '0 0 158 158',
    props
  });
}
