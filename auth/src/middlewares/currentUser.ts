import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Defines what the payload object will be comprised of
interface UserPayload {
  id: string;
  email: string;
}

// Adds currentUser to Express Request namespace
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
