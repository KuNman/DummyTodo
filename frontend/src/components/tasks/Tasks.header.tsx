import React, { useState } from 'react';
import { TextInput } from '../inputs/text/Text.input';
import { enTranslations } from '../../translations/en/en.translations';
import { AddButton } from '../buttons/add/Add.button';
import { useTasksContext } from '../../providers/tasks/TasksProvider';

export const TasksHeader: React.FC = () => {
  const [value, setValue] = useState<string>();

  const { create } = useTasksContext();

  return <div className="card-header">
    <div className="input-group mb-3">
      <TextInput
        placeholder={enTranslations.ENTER_TODO}
        onChange={(e) => setValue((e.currentTarget as HTMLInputElement).value)}
      />
      <div className="input-group-append">
        <AddButton
          text={enTranslations.ADD}
          onClick={() => create(value) && setValue(undefined)}
        />
      </div>
    </div>
  </div>
}
