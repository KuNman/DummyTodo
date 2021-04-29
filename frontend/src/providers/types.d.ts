import { ReactNode } from 'react';

declare type ContextProps = {
    children: ReactNode;
}

declare type Task = {
    id: number;
    value: string;
    isDone?: boolean
}

declare type TasksContextProps = ContextProps;

declare type TasksContextType = {
    fetchedTasks?: Task[];
    del: (id: number) => Promise<void>;
    create: (Task) => Promise<void>
    get: () => void;
    setIsDone: (id: number, value: boolean) => Promise<void>
}
