import axios from 'axios';
import { api } from '../api';
import { Task } from '../../providers/types';

const path = `${api.path}/tasks`

export const TasksApi = {
  get: async (): Promise<Task[]> => axios.get(path)
    .then((res) => res.data),
  delete: async (id: number): Promise<void> => axios.delete(`${path}/${id}`),
  create: async (data: Partial<Task>): Promise<Task> => axios.put(path, data)
    .then((res) => res.data),
  update: async (id: number, data: Partial<Task>): Promise<Task> => axios.post(`${path}/${id}`, data)
};
