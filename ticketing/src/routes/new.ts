import express, { Request, Response } from 'express';
import { requireAuth } from '@osorg/common-middleware';

const router = express.Router();

router.post('/api/ticketing', requireAuth, (req: Request, res: Response) => {
  res.sendStatus(200);
});

export { router as createTicketRouter };
