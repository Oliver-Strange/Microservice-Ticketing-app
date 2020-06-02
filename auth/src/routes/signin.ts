import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.get(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must supply a password'),
  ],
  // Middleware to check request for errors to throw
  validateRequest,
  (req: Request, res: Response) => {}
);

export { router as signinRouter };
