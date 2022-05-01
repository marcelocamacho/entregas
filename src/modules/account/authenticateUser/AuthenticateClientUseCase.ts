import { prisma } from '../../../databse/prismaClient';
import {compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient{
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({username, password}:IAuthenticateClient){
    const existClient = await prisma.clients.findFirst({
      where:{
        username
      }
    });

    if(!existClient){
      throw new Error("Username or password invalid!")
    };

    const passwordMatch = await compare(password,existClient.password);
    
    if(!passwordMatch){
      throw new Error("Username or password invalid!");
    }

    const token = sign({username},"15e29073b36ace1d7197245155f745a4",
    {
      subject: existClient.id,
      expiresIn: "1d"
    });

    return token;
  }
}

