import convict from 'convict';
import { appConfig } from './app.config';
import { routesConfig } from './routes.config';
import { dbConfig } from './db.config';

const tempConfig = convict({
  app: appConfig,
  routes: routesConfig,
  db: dbConfig,
});

tempConfig.validate({ allowed: 'strict' });
export const config = tempConfig.getProperties();
