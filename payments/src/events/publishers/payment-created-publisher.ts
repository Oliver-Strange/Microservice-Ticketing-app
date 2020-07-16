import { Subjects, Publisher, PaymentCreatedEvent } from '@osorg/common-middleware';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}