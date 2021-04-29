import React from 'react';
import { Button } from '../Button';
import { enTranslations } from '../../../translations/en/en.translations';

export const AddButton: (props: ButtonProps) => JSX.Element = (props: ButtonProps) => <Button
  text={props.text ?? enTranslations.ADD}
  onClick={props.onClick}
/>
