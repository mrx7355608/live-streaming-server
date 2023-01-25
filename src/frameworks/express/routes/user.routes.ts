import { Router } from 'express';
import { userControllers } from '@/adapters/controllers';
import makeRequestHandler from '../utils/requestHandler';

export const userRouter = Router();

userRouter
    .route('/')
    .get(makeRequestHandler(userControllers.getUsers))
    .post(makeRequestHandler(userControllers.postUser));
userRouter.get('/:id', makeRequestHandler(userControllers.getOneUser));
