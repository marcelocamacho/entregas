import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running"));

app.use((err:Error, request:Request, response:Response, next: NextFunction) => {
  if (err instanceof Error){
    return response.status(400).json({
      message: err.message
    });
  }
  return response.status(500).json({
    status: "error",
    menssage: "Internal Server Error"
  });
});