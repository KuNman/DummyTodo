import React from 'react';

export const Button: (props: ButtonProps) => JSX.Element = (props: ButtonProps) => {
  return <button
    className={`btn ${props.className ?? 'btn btn-secondary shadow-none'}`}
    type="button"
    onClick={props.onClick}
  >
    {props.text}
  </button>
}
