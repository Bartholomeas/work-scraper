export {};

declare global {
  namespace Express {
    export interface Request {
      requestTime: string;
    }
  }
}