// config-disable-next-line @typescript-config/ban-ts-comment
// @ts-expect-error

declare global {
  namespace Express {
    interface Request {
      requestTime: string;
    }
  }
}
