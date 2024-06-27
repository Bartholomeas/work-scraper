// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

declare global {
  namespace Express {
    interface Request {
      requestTime: string;
    }
  }
}
