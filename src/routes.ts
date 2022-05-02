import {Handler, NextFunction, Request, Response, Router} from 'express';
import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

/*const resolver = (handlerFn:Handler) => {
  return (req:Request, res:Response, next:NextFunction) => {
    return Promise.resolve(handlerFn(req,res,next))
    .catch(e => next(e))
  }
}
*/
const createClientController = new CreateClientController();
routes.post("/client", createClientController.handle);

const autheticateClientController = new AuthenticateClientController();
routes.post("/authenticate", autheticateClientController.handle);

export {routes}