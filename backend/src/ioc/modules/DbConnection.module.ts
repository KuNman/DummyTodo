import { ContainerModule, interfaces } from 'inversify';
import { IOC_TYPES } from '../types/ioc.types';
import { config } from '../../config/config';

export const DbConnectionModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<object>(IOC_TYPES.DbConnection)
    .toConstantValue(config.db.connection);
});
