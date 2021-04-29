import { inject, injectable } from 'inversify';
import { ModelCtor, Sequelize } from 'sequelize';
import { RepositoryInterface } from './Repository.interface';
import { IOC_TYPES } from '../ioc/types/ioc.types';
import { OrmInterface } from '../db/orm/Orm.interface';
import { TaskCreationInterface } from '../db/models/Task.model';
import { NotFoundError } from '../errors/NotFound.error';

@injectable()
export default abstract class RepositoryAbstract<T> implements RepositoryInterface<T> {
  constructor(
    @inject(IOC_TYPES.OrmInterfaceSymbol) protected orm: OrmInterface<Sequelize>,
    @inject(IOC_TYPES.Model) protected model: ModelCtor<any>,
  ) {}

  async create(data: TaskCreationInterface) {
    await this.orm.getClient();

    return this.model.create(data);
  }

  async list() {
    await this.orm.getClient();

    return this.model.findAll({order: ['id'] });
  }

  async get(id: number) {
    await this.orm.getClient();

    const found = await this.model.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundError(this.model.name, id);
    }

    return found;
  }

  async delete(id: number) {
    await this.orm.getClient();

    const object = await this.get(id);

    return object.destroy({ where: { id } });
  }

  async update(id: number, payload: object) {
    await this.orm.getClient();

    const object = await this.get(id);
    await object.update(payload);

    return object.reload();
  }
}
