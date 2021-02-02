import type { SVGAttributes } from 'react';
import createIcon from './createIcon';

export default function StarIcon(
  props: SVGAttributes<SVGElement>
): JSX.Element {
  return createIcon({
    path:
      'M70.489 49.661l9.244-33.012V0H50.267v16.65L59.51 49.66H70.49zM50.267 63.727l3.466-10.334-28.889-18.659-15.888-5.167L0 57.125l15.889 5.167 34.378 1.435zm29.466 0l34.378-1.435L130 57.125l-8.956-27.558-15.888 5.167-28.89 18.659 3.467 10.334zM39.29 122l9.822-13.492 12.422-32.437-8.666-6.316-27.445 21.817-9.822 13.492L39.289 122zm51.422 0l23.689-16.936-9.822-13.492-27.445-21.817-8.666 6.316 12.422 32.437L90.71 122z',
    viewBox: '0 0 130 122',
    props
  });
}
