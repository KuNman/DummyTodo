import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import { config } from './config/config';
import restRouter from './api/rest/v1/rest.router';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());

const routePrefix = `${config.app.prefix}${config.app.version}`;

server.use(routePrefix, restRouter);

server.listen(config.app.port, () => {
  console.log(`Server listening on port ${config.app.port}`);
});
