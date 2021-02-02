import type {
  ReactNode,
  TextareaHTMLAttributes,
  InputHTMLAttributes
} from 'react';
import type { Validator } from '../../core/validations';

/* eslint-disable import/no-unused-modules */
export type TextFieldType =
  | 'text'
  | 'search'
  | 'url'
  | 'tel'
  | 'email'
  | 'password';

export interface RequiredProps {
  /** Whether the field should be required or not */
  isRequired?: boolean;
  /** The type of the required indicator to display next to the label */
  requiredIndicatorType?: RequiredIndicatorType;
  /** Whether to always show the indicator when the type is text */
  alwaysShowRequiredIndicator?: boolean;
}

export interface FormControlProps extends RequiredProps {
  /** Whether the field should be disabled or not */
  isDisabled?: boolean;
  /** Whether the field should be readonly or not */
  isReadonly?: boolean;
  /** Whether the field should receive focus on render */
  autoFocus?: boolean;
  /** The text content to display as the label */
  label?: string;
  /** A list of validator functions to run onBlur */
  validations?: Validator[];
  /** Wheter the input should display its valid or invalid styling */
  isValid?: boolean;
  /** The text content for the hint text */
  hint?: string;
}

export interface ControlLabelProps extends RequiredProps {
  /** The text content to display as the label */
  label: string;
  /** The field associated with the label */
  children: ReactNode;
}

export type RequiredIndicatorType = 'icon' | 'text';

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FormControlProps {
  /** The text content to display as the label */
  label: string;
  /** The placeholder text that occupies the text input when it is empty */
  placeholder?: string;
  /** The current value of the text field */
  value: string;
  /** The input type to render */
  type?: TextFieldType;
}

export interface TextAreaProps
  extends FormControlProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** The text content to display as the label */
  label: string;
  /** The number of rows the textarea should initially span */
  rows?: number;
  /** The placeholder text that occupies the textarea when it is empty */
  placeholder?: string;
  /** The current value of the textare */
  value: string;
}
