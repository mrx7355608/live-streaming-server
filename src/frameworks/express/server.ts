import express, { Application } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import morgan from 'morgan';
import { userRouter } from './routes/user.routes';

export const app: Application = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRouter);
