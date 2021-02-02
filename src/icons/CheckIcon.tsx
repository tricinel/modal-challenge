import type { SVGAttributes } from 'react';
import createIcon from './createIcon';

export default function CheckIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return createIcon({
    path:
      'M79 0c43.63 0 79 35.37 79 79s-35.37 79-79 79S0 122.63 0 79 35.37 0 79 0zm39.015 41.43L62 97.445l-22.015-21.93L28 87.5l34 34 68-68-11.985-12.07z',
    viewBox: '0 0 158 158',
    props
  });
}
