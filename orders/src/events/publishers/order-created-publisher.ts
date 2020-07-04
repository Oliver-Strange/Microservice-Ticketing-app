import { Publisher, Subjects, OrderCreatedEvent } from '@osorg/common-middleware';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
