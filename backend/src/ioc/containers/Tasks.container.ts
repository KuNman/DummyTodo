import { Container } from 'inversify';
import { SequelizeModule } from '../modules/Sequelize.module';
import { TasksRepositoryModule } from '../modules/TasksRepository.module';
import { DbConnectionModule } from '../modules/DbConnection.module';
import { TaskModelModule } from '../modules/TaskModel.module';

export const tasksContainer: () => Container = (): Container => {
  const container: Container = new Container();

  container.load(DbConnectionModule);

  container.load(SequelizeModule);

  container.load(TaskModelModule);

  container.load(TasksRepositoryModule);

  return container;
};
