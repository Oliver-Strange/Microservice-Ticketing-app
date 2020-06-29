import { Publisher, Subjects, TicketUpdatedEvent } from '@osorg/common-middleware';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
