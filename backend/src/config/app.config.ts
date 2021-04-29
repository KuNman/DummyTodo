export const appConfig = {
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port',
  },
  prefix: {
    format: String,
    default: '/api',
    env: 'PREFIX',
    arg: 'prefix',
  },
  version: {
    format: String,
    default: '/v1',
    env: 'version',
    arg: 'version',
  },
};
