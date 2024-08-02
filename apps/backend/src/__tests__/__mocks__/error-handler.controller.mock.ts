export const ErrorHandlerControllerMock = {
  handleError: jest.fn().mockImplementation((err: unknown) => `Handled error: ${err}`),
};
