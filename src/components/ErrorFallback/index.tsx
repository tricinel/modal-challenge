import React from 'react';
import type { FallbackProps } from 'react-error-boundary';

export default function ErrorFallback({
  error,
  resetErrorBoundary
}: FallbackProps): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: '#fafafa',
        border: '1px solid #ddd',
        borderRadius: '2px',
        maxWidth: '640px',
        margin: '2em auto',
        padding: '2em',
        textAlign: 'center',
        width: '90vw'
      }}
      role="alert"
      aria-live="assertive"
    >
      <h1 style={{ color: '#1e2c9d' }}>
        This is awkward! We failed to anticipate this happening at all...
      </h1>
      <p
        style={{ backgroundColor: '#a00f18', color: '#fafafa', padding: '1em' }}
      >
        <pre
          style={{
            whiteSpace: 'pre-wrap'
          }}
        >
          {error.message}
        </pre>
      </p>
      <p>Would you like to try again?</p>
      <button
        onClick={resetErrorBoundary}
        type="button"
        style={{
          backgroundColor: '#1e2c9d',
          border: 0,
          color: '#fafafa',
          fontSize: '0.88em',
          padding: '0.64em 1.24em'
        }}
      >
        Yes, please!
      </button>
    </div>
  );
}
