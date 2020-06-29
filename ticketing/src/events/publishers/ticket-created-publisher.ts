import { Publisher, Subjects, TicketCreatedEvent } from '@osorg/common-middleware';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
