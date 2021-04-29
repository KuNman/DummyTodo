import { injectable } from 'inversify';
import RepositoryAbstract from './Repository.abstract';
import { Task } from '../db/models/Task.model';

@injectable()
export default class TasksRepository extends RepositoryAbstract<Task> {}
