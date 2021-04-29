import React from 'react';
import { TextInputStyled } from './Text.styled';
import { TextInputProps } from '../types';

export const TextInput: (props: TextInputProps) => JSX.Element = (props: TextInputProps) =>
  <TextInputStyled
    type="text"
    className="form-control shadow-none"
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
