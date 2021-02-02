import React from 'react';
import { TextField } from '..';

export function ExampleOnBlur(): JSX.Element {
  const [blur, setBlur] = React.useState(false);

  return (
    <TextField
      label="Blur me"
      value={blur ? 'You have blurred!' : ''}
      isReadonly={true}
      onBlur={() => setBlur(!blur)}
    />
  );
}

export function ExampleOnChange(): JSX.Element {
  const [value, setValue] = React.useState('');

  return (
    <>
      <TextField
        label="Change me"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>You have entered {value}.</p>
    </>
  );
}
