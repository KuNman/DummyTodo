import React from 'react';
import { TasksItemStyled } from './Tasks.styled';
import { DeleteButton } from '../buttons/delete/Delete.button';
import { Button } from '../buttons/Button';
import { TasksItemProps } from './types';
import { useTasksContext } from '../../providers/tasks/TasksProvider';

const TasksItem: (props: TasksItemProps) => JSX.Element = (props: TasksItemProps) => {
  const { del, setIsDone } = useTasksContext();

  return <div className={'d-flex flex-column flex-md-row p-2'}>
    <TasksItemStyled
      isDone={props.isDone}
      className="list-group-item w-100 rounded"
    >
      {props.value}
    </TasksItemStyled>
    <Button
      onClick={() => setIsDone(props.id, !props.isDone)}
      text={props.isDone ? 'undone' : 'done'}
      className={props.isDone ? 'btn-primary' : 'btn-success'}
    />
    <DeleteButton onClick={() => del(props.id)}/>
  </div>
};

export default TasksItem;
