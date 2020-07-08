import { Subjects, Publisher, ExpirationCompleteEvent } from '@osorg/common-middleware';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
