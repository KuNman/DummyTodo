import React from 'react'
import { TasksStyled } from './Tasks.styled';
import { TasksHeader } from './Tasks.header';
import { TasksBody } from './Tasks.body';
import { TasksProvider } from '../../providers/tasks/TasksProvider';

export const Tasks: React.FC  = ()=> {
  return <TasksProvider>
    <TasksStyled className={'w-50 card'}>
      <TasksHeader/>
      <TasksBody/>
    </TasksStyled>
  </TasksProvider>
}
