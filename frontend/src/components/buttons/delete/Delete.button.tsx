import React from 'react';
import { Button } from '../Button';
import { enTranslations } from '../../../translations/en/en.translations';

export const DeleteButton: (props: ButtonProps) => JSX.Element = (props: ButtonProps) => <Button
  text={props.text ?? enTranslations.DELETE}
  onClick={props.onClick}
  className={'btn-danger'}
/>
