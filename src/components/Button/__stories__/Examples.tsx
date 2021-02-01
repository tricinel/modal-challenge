import React from 'react';
import Button from '..';

export default function ExampleOnPress(): JSX.Element {
  const [count, setCount] = React.useState(0);

  return (
    <Button onClick={() => setCount((c) => c + 1)}>
      You clicked {count} {count === 0 || count > 1 ? 'times' : 'time'}
    </Button>
  );
}
