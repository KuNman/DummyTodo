import 'reflect-metadata';
import { Sequelize } from 'sequelize';
import { inject, injectable } from 'inversify';
import { OrmInterface } from './Orm.interface';
import { IOC_TYPES } from '../../ioc/types/ioc.types';
import { initTaskModel } from '../models/Task.model';

@injectable()
export default class SequelizeOrm implements OrmInterface<Sequelize> {
  private readonly connection: string;

  private readonly client: Sequelize;

  private isInitialized: boolean = false;

  constructor(@inject(IOC_TYPES.DbConnection) connection: string) {
    this.connection = connection;
    this.client = new Sequelize(this.connection);
  }

  async getClient(): Promise<Sequelize> {
    if (!this.isInitialized) {
      return this.init();
    }

    return this.client;
  }

  async init() {
    return this.client.authenticate()
      .then(() => {
        this.client.sync();
        this.initModels();

        this.isInitialized = true;

        return this.client;
      })
      .catch((e) => {
        throw e;
      });
  }

  initModels(): void {
    initTaskModel(this.client);
  }
}
