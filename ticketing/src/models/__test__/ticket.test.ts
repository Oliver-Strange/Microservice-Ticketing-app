import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async (done) => {
  // create an instance of a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123',
  });

  // save the ticket to the db
  await ticket.save();

  // fetch the ticket twice
  const firstTicketInstance = await Ticket.findById(ticket.id);
  const secondTicketInstance = await Ticket.findById(ticket.id);

  // make two separate changes to the tickets we fetched
  firstTicketInstance!.set({ price: 10 });
  secondTicketInstance!.set({ price: 15 });

  // save the first fetched ticket, should work
  await firstTicketInstance!.save();

  // save the second fetched ticket and expect an error
  try {
    await secondTicketInstance!.save();
  } catch (error) {
    return done();
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    userId: '123',
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);

  await ticket.save();
  expect(ticket.version).toEqual(1);

  await ticket.save();
  expect(ticket.version).toEqual(2);
});
