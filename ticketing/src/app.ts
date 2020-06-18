import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from '@osorg/common-middleware';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

// checks incoming request for route that doesn't exist
// throwing a new error for the errorHandler to deal with
app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
