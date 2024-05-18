export interface User {
  id: string;
  email: string;
  password: string | undefined;
}


export interface DecodedJwtToken {
  id: string
  iat: number,
  exp: number
}