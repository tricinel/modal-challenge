import React from 'react';
import FormControlGroup from './FormControlGroup';
import FormControl from './FormControl';
import ControlLabel from './ControlLabel';
import TextHint from './TextHint';
import ValidationMessage from './ValidationMessage';
import type { TextFieldProps } from './types';
import useInput from '../../hooks/useInput';
import chain from '../../core/chain';

const TextFieldControl = FormControl.withComponent('input');

export default function TextField({
  isDisabled = false,
  isReadonly = false,
  isRequired = false,
  autoFocus = false,
  requiredIndicatorType = 'icon',
  alwaysShowRequiredIndicator = false,
  placeholder,
  value: initialValue = '',
  label,
  type = 'text',
  validations,
  onChange: initialOnChange,
  onBlur: initialOnBlur,
  isValid = true,
  hint = '',
  ...props
}: TextFieldProps): JSX.Element {
  const { value, valid, onChange, onBlur, errors } = useInput<HTMLInputElement>(
    {
      initialValid: isValid,
      initialValue,
      validations
    }
  );

  return (
    <FormControlGroup>
      <ControlLabel
        label={label}
        isRequired={isRequired}
        requiredIndicatorType={requiredIndicatorType}
        alwaysShowRequiredIndicator={alwaysShowRequiredIndicator}
      >
        <TextFieldControl
          autoFocus={autoFocus}
          type={type}
          value={value}
          readOnly={isReadonly}
          required={isRequired}
          disabled={isDisabled}
          placeholder={placeholder}
          {...props}
          onChange={chain(onChange, initialOnChange)}
          onBlur={chain(onBlur, initialOnBlur)}
          isValid={valid}
          aria-invalid={!valid}
        />
        {hint.length > 0 && <TextHint hint={hint} />}
        {!valid && errors.length > 0 && <ValidationMessage messages={errors} />}
      </ControlLabel>
    </FormControlGroup>
  );
}
