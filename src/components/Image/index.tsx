import React from 'react';
import type { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

function styles(layout: ImageLayout): SerializedStyles {
  return css`
    appearance: none;
    border: 0;
    box-sizing: border-box;
    inset: 0px;
    outline: 0;
    padding: 0px;
    vertical-align: middle;

    &::after,
    &::before {
      box-sizing: border-box;
    }

    ${layout === 'scale-down' && 'max-width: 100%;'};
    ${layout === 'responsive' && 'width: 100%; object-fit: contain;'};
    ${layout === 'fill' && 'max-width: 100%; object-fit: cover;'};
  `;
}

type ImageLayout =
  /** The image dimensions will not change as the viewport changes */
  | 'fixed'
  /** The image will scale up and down as the viewport changes */
  | 'responsive'
  /**
   * The image will scale up and down as the viewport changes and maintain the aspect ratio, filling the entire content box.
   * If it does not match the aspect ratio of its box, then the Image will be clipped to fit
   */
  | 'fill'
  /** The image will scale the dimensions down for smaller viewports but maintain the original dimensions for larger viewports */
  | 'scale-down';

// eslint-disable-next-line import/no-unused-modules
export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  /** The path or URL to the source image */
  src: string;
  /** Define a list of differently-sized versions of the same image, and provide information about the size of each one */
  srcSet?: string;
  /** The alternative text for assistive technologies  */
  alt: string;
  /** Determine how the image will behave for various viewports */
  layout?: ImageLayout;
}

/*
 * Images are used to insert and display images either from a local path or an external URL within a section.
 */
export default function Image({
  src,
  srcSet,
  alt,
  layout = 'scale-down',
  ...props
}: ImageProps): JSX.Element {
  return (
    <img css={styles(layout)} src={src} srcSet={srcSet} alt={alt} {...props} />
  );
}
