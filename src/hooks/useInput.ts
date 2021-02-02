import { useEffect, useState } from 'react';
import type { FocusEvent, ChangeEvent } from 'react';
import validate from '../core/validate';
import type { Validator } from '../core/validations';

interface InputHandler<DOMElement> {
  valid: boolean;
  value: string;
  onChange: (e: ChangeEvent<DOMElement>) => void;
  onBlur: (e: FocusEvent<DOMElement>) => void;
  errors: string[];
}

type InputElements = HTMLInputElement | HTMLTextAreaElement;

interface UseInputProps {
  initialValue: string;
  initialValid: boolean;
  validations?: Validator[];
}

export default function useInput<DOMElement extends InputElements>({
  initialValue,
  initialValid,
  validations
}: UseInputProps): InputHandler<DOMElement> {
  const [valid, setValid] = useState(initialValid);
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState<string[]>([]);

  // Sync initial values
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setValid(initialValid);
  }, [initialValid]);

  // We want the validations to run on blur not as the user changes the values
  function onBlur(e: FocusEvent<DOMElement>): void {
    if (typeof validations !== 'undefined' && validations.length > 0) {
      const hasErrors = validate(validations, e.target.value);
      setErrors(['Some errors occurred!']); // TODO: This actually needs to pick up the messages from the validation functions
      setValid(hasErrors);
    }
  }

  function onChange(e: ChangeEvent<DOMElement>): void {
    setValue(e.target.value);
  }

  return { valid, value, onChange, onBlur, errors };
}
