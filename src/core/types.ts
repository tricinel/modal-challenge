/* eslint-disable import/no-unused-modules */
import type { ButtonHTMLAttributes } from 'react';

export type Action = 'confirmation' | 'information' | 'destructive' | 'neutral';
export type BoxSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

// eslint-disable-next-line @typescript-eslint/no-type-alias
export type ButtonHTMLProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type Priority = 'polite' | 'assertive';
