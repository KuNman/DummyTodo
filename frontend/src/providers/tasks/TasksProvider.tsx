import React, { createContext, useContext } from 'react';
import { useTasksProvider } from './useTasksProvider';
import { TasksContextProps, TasksContextType } from '../types';

const defaultState = {};

export const TasksContext = createContext<TasksContextType>(defaultState as unknown as TasksContextType);

export function TasksProvider(props: TasksContextProps): JSX.Element {
  const { children } = props;
  const hook = useTasksProvider();

  return <TasksContext.Provider value={hook}>{children}</TasksContext.Provider>
}

export const useTasksContext = (): TasksContextType => useContext(TasksContext);
