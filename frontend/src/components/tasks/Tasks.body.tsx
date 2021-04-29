import React, { Suspense } from 'react';
import { useTasksContext } from '../../providers/tasks/TasksProvider';
import { enTranslations } from '../../translations/en/en.translations';
import TasksItem from './Tasks.item';

export const TasksBody: React.FC = () => {
  const { fetchedTasks } = useTasksContext();

  if(!fetchedTasks || !fetchedTasks.length) {
    return <div>{enTranslations.EMPTY_TODOS}</div>
  }

  return <div className="card-body">
    <ul className="list-group w-100">
      {
        fetchedTasks.map((task) => {
          return <Suspense
            key={task.id}
            fallback={<div>Loading...</div>}
          >
            <TasksItem {...task}/>
          </Suspense>
        }
        )
      }
    </ul>
  </div>
};
