// mocks stripe.charge.create with resolved empty object

export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({}),
  },
};
