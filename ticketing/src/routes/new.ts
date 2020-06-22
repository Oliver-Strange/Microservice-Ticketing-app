import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@osorg/common-middleware';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.post(
  '/api/ticketing',
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than zero'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    // pull out title and price from incoming request
    const { title, price } = req.body;

    const ticket = Ticket.build({
      title,
      price,
      // ts complains that current user might not be defined but require auth will stop
      // the whole process before current user would be needed
      userId: req.currentUser!.id,
    });
    await ticket.save();

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
