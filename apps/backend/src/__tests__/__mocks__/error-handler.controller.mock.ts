export const ErrorHandlerController = {
  handleError: jest.fn().mockImplementation(err => `Handled error: ${err}`),
};
