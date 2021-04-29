import { Request, RequestHandler, Response } from 'express';

declare type Route = {
  method: 'put' | 'get' | 'post' | 'delete',
  path: string,
  middlewares?: RequestHandler[],
  action: (request: Request, response: Response) => Promise<Response>
};
