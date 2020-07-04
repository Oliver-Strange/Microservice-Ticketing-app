import { Publisher, Subjects, OrderCancelledEvent } from '@osorg/common-middleware';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
