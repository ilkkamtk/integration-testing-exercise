require('dotenv').config();
import express, {Request, Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';

import {notFound, errorHandler, getStudents} from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// serve static files
app.use(express.static('./public'));

// serve uploaded files
app.use('/uploads', express.static('./uploads'));

// use generics to specify the type of the response body
app.get<{}, MessageResponse>('/', (_req: Request, res: Response) => {
  res.json({
    message: 'API location: api/v1',
  });
});

app.use('/api/v1', api);

// ****  serve html with ejs template engine ****

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));

// index page
app.get('/ui', getStudents, (_req: Request, res: Response) => {
  console.log(res.locals.students);
  res.render('pages/index', {
    title: 'Students',
    js: [],
    data: {
      students: res.locals.students,
    },
  });
});

// post page
app.get('/ui/post', (_req: Request, res: Response) => {
  res.render('pages/post', {
    title: 'Post',
    js: ['post.js'],
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
