export const dbConfig = {
  connection: {
    default: {
      dialect: 'postgres',
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    },
    env: 'DB_CONNECTION',
  },
};
