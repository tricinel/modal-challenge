import React from 'react';
import FormControlGroup from './FormControlGroup';
import FormControl from './FormControl';
import ControlLabel from './ControlLabel';
import TextHint from './TextHint';
import ValidationMessage from './ValidationMessage';
import useInput from '../../hooks/useInput';
import chain from '../../core/chain';
import type { TextAreaProps } from './types';

const TextAreaControl = FormControl.withComponent('textarea');

export default function TextArea({
  isDisabled = false,
  isReadonly = false,
  isRequired = false,
  autoFocus = false,
  requiredIndicatorType = 'icon',
  alwaysShowRequiredIndicator = false,
  placeholder,
  value: initialValue = '',
  label,
  validations,
  onChange: initialOnChange,
  onBlur: initialOnBlur,
  isValid = true,
  hint = '',
  rows = 3,
  ...props
}: TextAreaProps): JSX.Element {
  const {
    value,
    valid,
    onChange,
    onBlur,
    errors
  } = useInput<HTMLTextAreaElement>({
    initialValid: isValid,
    initialValue,
    validations
  });

  return (
    <FormControlGroup>
      <ControlLabel
        label={label}
        isRequired={isRequired}
        requiredIndicatorType={requiredIndicatorType}
        alwaysShowRequiredIndicator={alwaysShowRequiredIndicator}
      >
        <TextAreaControl
          autoFocus={autoFocus}
          value={value}
          readOnly={isReadonly}
          required={isRequired}
          disabled={isDisabled}
          placeholder={placeholder}
          {...props}
          onChange={chain(onChange, initialOnChange)}
          onBlur={chain(onBlur, initialOnBlur)}
          isValid={valid}
          rows={rows}
          aria-invalid={!valid}
        />
        {hint.length > 0 && <TextHint hint={hint} />}
        {!valid && errors.length > 0 && <ValidationMessage messages={errors} />}
      </ControlLabel>
    </FormControlGroup>
  );
}
