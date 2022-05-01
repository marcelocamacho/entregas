import {Router} from 'express';
import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

routes.get("/",(request,response)=>{
  return response.json({
    message: "OK"
  })
})

const createClientController = new CreateClientController();
routes.post("/client/", createClientController.handle);

const autheticateClientController = new AuthenticateClientController();
routes.post("/authenticate/",autheticateClientController.handle)

export {routes}