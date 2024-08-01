export const ErrorHandlerControllerMock = {
  handleError: jest.fn().mockImplementation((err: any) => `Handled error: ${err}`),
};
