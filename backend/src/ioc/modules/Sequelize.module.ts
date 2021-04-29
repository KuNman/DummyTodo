import { ContainerModule, interfaces } from 'inversify';
import { Sequelize } from 'sequelize';
import { OrmInterface } from '../../db/orm/Orm.interface';
import SequelizeOrm from '../../db/orm/Sequelize.orm';
import { IOC_TYPES } from '../types/ioc.types';

export const SequelizeModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<OrmInterface<Sequelize>>(IOC_TYPES.OrmInterfaceSymbol)
    .to(SequelizeOrm);
});
